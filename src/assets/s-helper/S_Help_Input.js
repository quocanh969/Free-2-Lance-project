import React, { Component } from 'react';
//import './selector.css';
import '../css/style.css';

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

export {
    S_Selector,
}
