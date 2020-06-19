import React, { Component } from 'react';
import { compensateScroll, htmlEscape } from '@fullcalendar/core';

export default class MultipleImageUploadComponent extends Component {

    fileObj = [];
    fileArray = [];
    imgArr = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [],
            img: [],
        }

        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);

    }

    uploadMultipleFiles(e) {
        let length = e.target.files.length;
        if (length == 1) {
            let b64 = '';
            let urlObj = URL.createObjectURL(e.target.files[0]);
            console.log(this.fileObj);
            if (this.fileObj.includes(e.target.files[0].name)) {
                console.log("DUBBED")
                return;
            }
            this.fileArray.push(urlObj);
            this.fileObj.push(e.target.files[0].name);
            this.getBase64(e.target.files[0], (result) => {
                b64 = result;
                this.imgArr.push(b64);
            });
        } else {
            for (let i = 0; i < length; i++) {
                let b64 = '';
                let urlObj = URL.createObjectURL(e.target.files[i]);
                if (!this.fileObj.includes(e.target.files[i].name)) {
                    this.fileArray.push(urlObj);;
                    this.fileObj.push(e.target.files[i].name);
                    this.getBase64(e.target.files[i], (result) => {
                        b64 = result;
                        b64 = b64.split(',')[1];
                        this.imgArr.push(b64);
                    })
                } else {
                    console.log("DUBBED")
                }
            }
        }
        this.setState({ img: this.imgArr, file: this.fileArray }, () => {
            this.props.onChange("relatedImg", this.state.img);
        });
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log("FLAG");
        console.log(e.target.files);
        let b64 = '';
        let urlObj = URL.createObjectURL(e.target.files[0]);
        console.log(this.fileObj);
        if (this.fileObj.includes(e.target.files[0].name)) {
            console.log("DUBBED")
        }
        this.fileArray[0] = (urlObj);
        this.fileObj[0] = (e.target.files[0].name);
        this.getBase64(e.target.files[0], (result) => {
            b64 = result;
            b64 = b64.split(',')[1];
            this.imgArr[0] = (b64);
        });
        this.setState({ img: this.imgArr, file: this.fileArray }, () => {
            this.props.onChange("relatedImg", this.state.img);
        });
    }

    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    removeImg = (index) => {
        let imgArr = this.state.img;
        let fileArr = this.state.file;
        imgArr.splice(index, 1);
        fileArr.splice(index, 1);
        this.fileObj.splice(index, 1);
        console.log(this.fileObj.length);
        if (this.fileObj.length === 0) {
            console.log("Empty already")
            document.getElementById('uploadImgMultiple').value = null;
        } else {
            // document.getElementById('uploadImg').value = this.fileObj.length;
        }
        this.setState({ img: imgArr, file: fileArr }, () => this.props.onChange("relatedImg", this.state.img));
    }

    render() {
        return (
            <div>
                <div className={"form-group multi-preview " + (this.state.file.length === 0 ? '' : 'bg-cloud p-3 border-radius-4')}>
                    {(this.fileArray || []).map((url, index) => (
                        <span key={index} onClick={this.removeImg.bind(this, index)}>
                            <img  className='border border-dark m-2' src={url} alt="..." width="128" height="128" style={{objectFit: 'contain'}}></img>
                        </span>
                    ))}
                </div>

                <div className="form-group">
                    <input id="uploadImgMultiple" type="file" accept="image/*" className="form-control" onChange={this.uploadMultipleFiles} style={{ display: 'none' }} multiple />
                    <input id="uploadImgSingle" type="file" accept="image/*" className="form-control" onChange={this.uploadFiles} style={{ display: 'none' }} single="true" />
                </div>
                {/* <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button> */}
            </div >
        )
    }
}

