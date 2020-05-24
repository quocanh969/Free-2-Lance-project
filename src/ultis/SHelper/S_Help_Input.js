import React, { Component } from 'react';
import '../../assets/css/style.css';
import './S_Help_style.css';

class S_Selector extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.value || this.props.placeholder,
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
                <div key={count} className={'dropdown-item cursor-pointer d-flex justify-content-between ' + (this.state.selected === e?'selected':'')}
                    onClick={()=>{this.handleSelect(e)}}>
                        <span className="text">{e}</span>
                        {(this.state.selected === e ? <i className='icon-feather-check pt-2'></i> : '')}
                </div>
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
        let flex = this.props.flex || '';  
        return (
            // <div className='btn-group bootstrap-select'>
            <div className={'w-100 ' + flex + ' '+ (this.props.disabled ? 'cursor-auto bg-F0F0F0' : '')}>
                <div className="dropdown">
                    <button disabled={this.props.disabled} 
                        className={"btn btn-select dropdown-toggle w-100 d-flex justify-content-between " + (this.props.className)}  
                        type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>{this.state.selected}</span>                        
                        <span className="bs-caret">
                            <span className="caret"></span>
                        </span>
                    </button>
                    <div className="dropdown-menu mt-1 w-100" aria-labelledby="dropdownMenuButton">
                        {this.initContent()}
                    </div>
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
