import React from 'react';
import {Col, Form, FormGroup, Input, Label, Button} from 'reactstrap';
import Dropzone from 'react-dropzone'


export default class AddSystemDetailComponent extends React.Component {
    //state = {...this.props.userData};
    state = {
        dropZoneDisabled: true,
        files: []
    };

   // editedData = {...this.state};

    // handleOnChange = (e) => {
    //     console.log(e.target)
    // };

    handleAddSystem = () => {
        this.refs.dropzone.open();
    };

    onDrop = (files) => {
        this.setState({
            files: files
        });
    };

    render() {
        return(
            <div>
                <Form>
                    <FormGroup row>
                        <Label color={"muted"} sm={"3"} for={"systemName"}>
                            System Name:
                        </Label>
                        <Col sm={20}>
                            <Input id={"systemName"} onChange={this.onInputChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label color={"muted"} sm={"3"} for={"systemDescription"}>
                             System Description:
                        </Label>
                        <Col sm={20}>
                            <Input id={"systemDescription"}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={20}>
                            <Dropzone ref="dropzone" onDrop={this.onDrop}>
                                <div><br/><br/>Click the "Add Logo" button to upload an image here!</div>
                            </Dropzone>
                            <Button color="info" onClick={this.handleAddSystem}>Add System Logo</Button>
                        </Col>

                    </FormGroup>
                </Form>
            </div>
        )
    }

}



