import React from 'react';

class ProfileStatus extends React.Component<any, any>{
    state = {
        editMode: false
    }
    activateEditMode(){
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode(){
        this.setState({
            editMode: false
        })
    }
    render(){
        return (
            <>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} type="text"/>
                    </div>
                }
            </>

        );
    }

};

export default ProfileStatus;