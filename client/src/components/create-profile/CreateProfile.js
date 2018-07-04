import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';



 class CreateProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            githubusername: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            errors: {} 
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('submit');
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

  render() {
      const { errors, displaySocialInputs } = this.state;

      let socialInputs;

      if(displaySocialInputs){
        socialInputs = (
            <div>
                <InputGroup
                placeholder="Twitter Profile URL"
                name="twitter"
                icon="fab fa-twitter"
                value={this.state.twitter}
                onChange={this.onChange}
                error={errors.twitter}                
                />
                <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />
          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />
          <InputGroup
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />      
            </div>
        );
      }

      const options = [
        { label: '* Select Professional Status', value: 0 },
        { label: 'Developer', value: 'Developer' },
        { label: 'Junior Developer', value: 'Junior Developer' },
        { label: 'Senior Developer', value: 'Senior Developer' },
        { label: 'Manager', value: 'Manager' },
        { label: 'Student or Learning', value: 'Student or Learning' },
        { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
        { label: 'Intern', value: 'Intern' },
        { label: 'Other', value: 'Other' }
      ];

    return (
      <div className="create-profile">
      <div className="container">
      <div className="row">
      <div className="col-md-8 m-auto">
      <h1 className="display-4 text-center">Create your Profile</h1>
      <p className="lead text-center">Please provide some information for your Profile</p>
      <small className="d-block pb-3">* is a required field</small>
      <form onSubmit={this.onSubmit}>
      <TextFieldGroup 
      placeholder="* Profile Handle"
      name="Handle"
      value={this.state.handle}
      onChange={this.onChange}
      error={errors.handle}
      info="Choose a unique handle for your profile URL, make it cool!"
      />
      <SelectListGroup 
      placeholder="Status"
      name="status"
      value={this.state.status}
      onChange={this.onChange}
      options={options}
      error={errors.status}
      info="Career Status"
      />
      <TextFieldGroup 
      placeholder="Company"
      name="company"
      value={this.state.company}
      onChange={this.onChange}
      error={errors.company}
      info="Who do you work for?"
      />
      <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Could be your own website or your company's"
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="City or city & state suggested (eg. Orlando, FL)"
                />
                <TextFieldGroup
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP"
                />
                <TextFieldGroup
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info="If you want your latest repos and a Github link, include your username"
                />
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Who are you?"
                />
            <div className="mb-3">
                <button onClick={() => {
                    this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                        }))
                    }}className="btn btn-light">
                    Add your Social Media Links
                </button>
                <span className="text-muted">Optional</span>
            </div>
            {socialInputs}
            <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
      </form>
      </div>
      </div>
      </div>        
      </div>
    )
  }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps)(CreateProfile);