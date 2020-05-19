import React, { Component } from 'react';
import '../../assets/css/style.css';
import './S_Help_style.css';

class S_Selector extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.placeholder,
        }

        //this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(text) {
        this.setState({selected: text}, () =>{
            document.getElementById(this.props.id).value = text;
        })
    }

    initContent() {
        let count = 1;
        let content = [];

        for(let e of this.props.data)
        {
            content.push(
                <li data-original-index={count} key={count} className={(this.state.selected === e?'selected':'')}>
                    <a tabIndex="0" onClick={()=>{this.handleSelect(e)}}
                        data-tokens="null" role="option" aria-disabled="false" aria-selected={(this.state.selected === e?'true':'false')}>
                        <span className="text">{e}</span>
                        <span className="glyphicon glyphicon-ok check-mark"></span>
                    </a>
                </li>
            );
            count++;
        }

        return content;
    }

    initOptions() {
        let count = 1;
        let content = [];

        for(let e of this.props.data)
        {
            content.push(
                <option value={e} key={count}></option>
            );
            count++;
        }

        return content;
    }

    render() {
        return (
            <div className='btn-group bootstrap-select'>
                <button type="button" className="btn dropdown-toggle bs-placeholder btn-default"
                    data-toggle="dropdown" role="button" data-id="select-category"
                    title={this.state.selected} aria-expanded="false">
                    <span className="filter-option pull-left">{this.state.selected}</span>
                    &nbsp;
                    <span className="bs-caret">
                        <span className="caret"></span>
                    </span>
                </button>
                <div className="dropdown-menu open" role="combobox"
                    style={{maxHeight: '152px', overflow: 'hidden', minHeight: '121px'}}>
                    <ul className="dropdown-menu inner" role="listbox" aria-expanded="false"
                        style={{maxHeight: '132px', overflowY: 'auto', minHeight: '101px'}}>
                        {this.initContent()}                                       
                    </ul>
                </div>

                <select id={this.props.id} style={{display:'none'}}>
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
            file:null,
        }


        this.handleDrop = this.handleDrop.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleDrop(e){
        e.preventDefault();
        this.props.onChange(e.dataTransfer.files[0]);
    }

    handleChange(e) {
        this.props.onChange(e.target.files[0]);
    }

    render() {
        let fileTypeClass = 'icon-feather-upload'
        if(this.props.type === 'image')
        {
            fileTypeClass = 'icon-feather-camera'
        }
        return (
            <div className={this.props.className} style={this.props.style}>
                <input id='file-input' multiple={false} type='file' style={{display:'none'}} onChange={this.handleChange}></input>
                <div className={'py-2 px-1 '+(this.state.isDragOver ? 'drag-box-over' : 'drag-box')} 
                    id='drag-drop-box'
                    style={{fontSize: this.props.fontSize || '15px'}}                    
                    onDrop={this.handleDrop} 
                    onDragOver={(e)=>{e.preventDefault();this.setState({isDragOver: true})}}
                    onDragLeave={()=>{this.setState({isDragOver: false})}}>
                        {this.props.title} <br></br>or<br></br>
                        <span className='camera-icon py-1 px-3 rounded cursor-pointer'
                            onClick={()=>{document.getElementById('file-input').click()}}
                        >
                            <i className={fileTypeClass}></i>
                        </span>
                </div>
            </div>
        )
    }
}

export {
    S_Selector,
    S_Drag_Drop,
}
