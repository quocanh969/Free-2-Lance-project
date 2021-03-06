import React, { Component } from 'react';
import './S_Help_style.css';

class S_Selector extends Component {

    // Một số directive
    //data: là mảng data object truyền vào
    //value: là giá trị ban đầu
    //placeholder: là phần thông tin hiển thị ra bên ngoài
    //value_tag: là tên thành phần của object dùng để làm giá trị cho thẻ select
    //text_tag: là tên thành phần của object dùng để hiển thị text ra ngoài
    //disabled: vô hiệu hóa phím bấm
    //flex: chỉnh sửa kick thước col- 
    //className: màu sắc/border của nút bấm
    //id: là id tương ứng với thẻ select dùng cho sau này khi lấy giá trị

    constructor(props) {
        super(props);

        this.state = {
            selected: undefined,
        }
        // this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        if(this.props.value)
        {
            console.log(this.props.value);
            this.initValue();
        }
    }

    componentDidUpdate() {        
        if(this.state.selected === undefined && this.props.value) {            
            console.log('hello world ~!!');            
            this.initValue();
        }
        else {
            if(this.props.disabled && this.state.selected && this.state.selected[this.props.value_tag] !== this.props.value) {
                this.initValue();
            }
            // console.log(this.state.selected[this.props.text_tag]);
        } 
    }
    // componentDidUpdate() {
    //     console.log(this.props);
    // }

    findeValueObject(value) {
        for(let e of this.props.data)
        {
            if(e[this.props.value_tag] === value)
            {
                return e;
            }
        }
        return null;
    }

    initValue() {
        console.log('hello');
        let value = Number.parseInt(this.props.value);
        let selected = this.findeValueObject(value);
        if(selected !== null)
        {
            this.setState({selected,});
        }
    }

    handleSelect(selected) {
        this.setState({ selected, }, () => {
            document.getElementById(this.props.id).value = selected[this.props.value_tag];
            if(this.props.handleChange)
            {
                this.props.handleChange();   
            }            
        });
        
    }

    initContent() {
        let count = 1;
        let content = [];

        for (let e of this.props.data) {
            content.push(
                <div key={count} className={'dropdown-item cursor-pointer d-flex justify-content-between ' + (this.state.selected === e ? 'selected' : '')}
                    onClick={() => { this.handleSelect(e) }}>
                    <span className={(this.state.selected === e ? 'text-293FE4' : '')}>{e[this.props.text_tag]}</span>                    
                </div>
            );
            count++;
        }

        return content;
    }

    initOptions() {
        let count = 1;
        let content = [];
        
        content.push(
            <option value={0} key={count}></option>
        );
        count++;

        for (let e of this.props.data) {
            content.push(
                <option value={e[this.props.value_tag]} key={count}></option>
            );
            count++;
        }

        return content;
    }

    render() {
        let flex = this.props.flex || '';
        return (
            // <div className='btn-group bootstrap-select'>
            <div className={'w-100 ' + flex + ' ' + (this.props.disabled ? 'cursor-auto' : '')}>
                <div className="dropdown">
                    {(
                        this.props.disabled
                        ?
                        <div className={"s-btn-select bg-cloud w-100 text-truncate " + (this.props.className)}>
                            {this.state.selected !== undefined ? this.state.selected[this.props.text_tag] : this.props.placeholder}                      
                        </div>
                        :
                        <button className={"btn btn-select dropdown-toggle w-100 d-flex justify-content-between mb-0 " + (this.props.className)}
                            type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>{this.state.selected !== undefined ? this.state.selected[this.props.text_tag] : this.props.placeholder}</span>
                            <span className="bs-caret">
                                <span className="caret"></span>
                            </span> 
                        </button>
                    )}
                    <div className="dropdown-menu mt-1 w-100 selector-dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {this.initContent()}
                    </div>
                </div>

                <select id={this.props.id} style={{ display: 'none' }} defaultValue={this.props.value || 0}>
                    {this.initOptions()}
                </select>
            </div>
        )
    }
}

class S_Drag_Drop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDragOver: false,
            file: null,
        }


        this.handleDrop = this.handleDrop.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleDrop(e) {
        e.preventDefault();
        this.props.onChange(e.dataTransfer.files[0]);
    }

    handleChange(e) {
        this.props.onChange(e.target.files[0]);
    }

    render() {
        let fileTypeClass = 'icon-feather-upload'
        if (this.props.type === 'image') {
            fileTypeClass = 'icon-feather-camera'
        }
        return (
            <div className={this.props.className} style={this.props.style}>
                <input id='file-input' multiple={false} type='file' style={{ display: 'none' }} onChange={this.handleChange}></input>
                <div className={'py-2 px-1 ' + (this.state.isDragOver ? 'drag-box-over' : 'drag-box')}
                    id='drag-drop-box'
                    style={{ fontSize: this.props.fontSize || '15px' }}
                    onDrop={this.handleDrop}
                    onDragOver={(e) => { e.preventDefault(); this.setState({ isDragOver: true }) }}
                    onDragLeave={() => { this.setState({ isDragOver: false }) }}>
                    {this.props.title} <br></br>or<br></br>
                    <span className='camera-icon py-1 px-3 rounded cursor-pointer'
                        onClick={() => { document.getElementById('file-input').click() }}
                    >
                        <i className={fileTypeClass}></i>
                    </span>
                </div>
            </div>
        )
    }
}

// class S_Tag_Autocomplete extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             suggestions: null,
//             isFocus: false,
//             chosen: null,
//         }

//         this.handleChange = this.handleChange.bind(this);
//         this.selectTag = this.selectTag.bind(this);
//         this.removeTag = this.removeTag.bind(this);
//     }

//     componentWillMount() {
//         document.addEventListener('mousedown', this.handleClick, false);
//         this.setState({ suggestions: this.props.suggestions || [], chosen: this.props.chosen || [] })
//     }

//     componentWillUnmount() {
//         document.removeEventListener('mousedown', this.handleClick, false);
//     }

//     renderSuggestions() {
//         let content = [];
//         let count = 0;
//         /* onClick={()=>{document.getElementById(this.props.id).value = e.tag}}> */
//         for (let e of this.state.suggestions) {            
//             content.push(
//                 <div className='border border-dark rounded my-1 px-3 cursor-pointer' key={count}
//                     onClick={()=>this.selectTag(e)}>
//                     {e.name}
//                 </div>
//             );
//             count++;
//         }

//         return content;
//     }

//     renderChosen() {
//         let content = [];
//         let count = 0;
//         for(let e of this.state.chosen)
//         {
//             content.push(
//                 <span className='m-2 p-2 bg-293FE4 text-white rounded' key={count}>
//                     <span className='pr-2'>{e.name}</span>    
//                     <i className='icon-line-awesome-times pl-1 border-left border-white cursor-pointer' onClick={()=>{this.removeTag(e)}}></i>
//                 </span>
//             );
//             count++;
//         }

//         return content;
//     }

//     handleClick = (e) => {
//         if(!document.getElementById('auto_complete').contains(e.target)) {
//             this.setState({isFocus: false});
//             // console.log('địt mẹ cuộc đời');
//         }
//     }

//     handleChange() {
//         let inputValue = document.getElementById(this.props.id).value.toLowerCase();

//         let tagSuggestions = this.props.suggestions.filter((eachTag) => {
//             return eachTag.tag.toLowerCase().startsWith(inputValue);
//         });

//         this.setState({ suggestions: tagSuggestions, isFocus: true });
//     }

//     selectTag(tag) {
//         let temp = this.state.chosen;
//         let arr = temp.filter(function(e){
//             return e === tag;
//         });

//         if(arr.length === 0)
//         {
//             temp.push(tag);
//             this.setState({suggestions: this.props.suggestions || [], chosen: temp, isFocus: false});            
//         }
//         else
//         {
//             this.setState({suggestions: this.props.suggestions || [], isFocus: false});
//         }
        
//         document.getElementById(this.props.id).value = '';
//     }

//     removeTag(tag) {
//         let temp = this.state.chosen;
//         temp = temp.filter((eachTag) => {return eachTag!==tag});
//         this.setState({chosen: temp});        
//     }

//     render() {
//         return (
//             <div>
//                 <div id='auto_complete' className='input-tag'>
//                     <div>
//                         <div className='border border-dark d-flex flex-wrap'>
//                             {(
//                                 this.state.chosen.length > 0 
//                                 &&                                
//                                 this.renderChosen()
//                             )}
//                             <input id={this.props.id} type='text' className='mb-0 mt-1 pt-1'
//                                 autoComplete='off'
//                                 style={{border: '0', outline: 'none', boxShadow: 'none', width: 'auto',}}
//                                 onFocus={()=>{this.setState({isFocus: true})}}
//                                 onChange={this.handleChange}>
//                             </input>
//                         </div>
//                         {/* <button className='keyword-input-button ripple-effect' onClick={()=>{this.selectTag({id: this.props.suggestions.length, tag: document.getElementById(this.props.id).value})}}>
//                             <i className='icon-material-outline-add'></i>
//                         </button> */}
//                     </div>

//                     <div className={'suggestion ' + (this.state.isFocus && 'suggestion-show')}>
//                         {this.renderSuggestions()}
//                     </div>
//                 </div>
//                 {/* {(
//                     this.state.chosen.length > 0 
//                     &&
//                     <div className='mt-2 p-1 bg-silver d-flex flex-wrap rounded'>
//                         {this.renderChosen()}
//                     </div>
//                 )} */}
                
//             </div>
//         )
//     }
// }

class S_Tag_Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: null,
            isFocus: false,
            chosen: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.selectTag = this.selectTag.bind(this);
        this.removeTag = this.removeTag.bind(this);
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
        this.setState({ suggestions: this.props.suggestions || [], chosen: this.props.chosen || [] })
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    renderSuggestions() {
        let content = [];
        let count = 0;
        /* onClick={()=>{document.getElementById(this.props.id).value = e.tag}}> */
        for (let e of this.state.suggestions) {            
            content.push(
                <div className='border border-dark rounded my-1 px-3 cursor-pointer' key={count}
                    onClick={()=>this.selectTag(e)}>
                    {e.name}
                </div>
            );
            count++;
        }

        return content;
    }

    renderChosen() {
        let content = [];
        let count = 0;
        for(let e of this.state.chosen)
        {
            content.push(
                <span className='m-2 p-2 bg-293FE4 text-white rounded' key={count}>
                    <span className='pr-2'>{e.name}</span>    
                    <i className='icon-line-awesome-times pl-1 border-left border-white cursor-pointer' onClick={()=>{this.removeTag(e)}}></i>
                </span>
            );
            count++;
        }

        return content;
    }

    handleClick = (e) => {
        if(!document.getElementById('auto_complete').contains(e.target)) {
            this.setState({isFocus: false});
        }
    }

    handleChange() {
        let inputValue = document.getElementById(this.props.id).value.toLowerCase();

        let tagSuggestions = this.props.suggestions.filter((eachTag) => {
            return eachTag.name.toLowerCase().startsWith(inputValue);
        });

        this.setState({ suggestions: tagSuggestions, isFocus: true });
    }

    selectTag(tag) {
        let temp = this.state.chosen;
        let arr = temp.filter(function(e){
            return e === tag;
        });

        if(arr.length === 0)
        {
            temp.push(tag);
            this.setState({suggestions: this.props.suggestions || [], chosen: temp, isFocus: false});            
        }
        else
        {
            this.setState({suggestions: this.props.suggestions || [], isFocus: false});
        }
        this.props.handleChange("tags", this.state.chosen);
        document.getElementById(this.props.id).value = '';
    }

    removeTag(tag) {
        let temp = this.state.chosen;
        temp = temp.filter((eachTag) => {return eachTag!==tag});
        this.setState({chosen: temp});        
    }

    render() {
        return (
            <div>
                <div id='auto_complete' className='input-tag'>
                    <div className='keyword-input-container'>
                        <input id={this.props.id} type='text' className='mb-0 keyword-input with-border'  
                            autoComplete='off'                          
                            onFocus={()=>{this.setState({isFocus: true})}}
                            onChange={this.handleChange}>
                        </input>
                    </div>

                    <div className={'suggestion ' + (this.state.isFocus && 'suggestion-show')}>
                        {this.renderSuggestions()}
                    </div>
                </div>
                {(
                    this.state.chosen.length > 0 
                    &&
                    <div className='mt-2 p-1 bg-silver d-flex flex-wrap rounded' style={{maxHeight: '50vh', overflowY: 'auto'}}>
                        {this.renderChosen()}
                    </div>
                )}

            </div>
        )
    }
}

export {
    S_Selector,
    S_Drag_Drop,
    S_Tag_Autocomplete
}
