import React, { Fragment, PureComponent } from 'react';
import FeatherSettings from 'react-feather/dist/icons/settings';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import { Field, reduxForm } from 'redux-form';
import { Popover, PopoverBody } from 'reactstrap';

import { isFieldPositiveInteger } from '../lib/';

class Settings extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      isSettingsPopoverOpen: false
    };
    
    this.debouncedOnWidthChange = debounce(this.onWidthChange, 250);
    this.debouncedOnHeightChange = debounce(this.onHeightChange, 250);
    this.debouncedOnPlayerNumberChange = debounce(this.onPlayerNumberChange, 250);
  }

  componentWillUnmount() {
    this.debouncedOnWidthChange.cancel();
    this.debouncedOnHeightChange.cancel();
    this.debouncedOnPlayerNumberChange.cancel();
  }

  onWidthChange = (event, newValue) => {
    const { changeWidth } = this.props;
    if (!isFieldPositiveInteger(newValue)) return;

    changeWidth({ width: Number(newValue) });
  };

  onHeightChange = (event, newValue) => {
    const { changeHeight } = this.props;
    if (!isFieldPositiveInteger(newValue)) return;

    changeHeight({ height: Number(newValue) });
  };

  onPlayerNumberChange = (event, newValue) => {
    const { changePlayerNumber } = this.props;
    if (!isFieldPositiveInteger(newValue)) return;

    changePlayerNumber({ playerNumber: Number(newValue) });
  };

  onToggleSettings = () => {
    const { isSettingsPopoverOpen } = this.state;
    this.setState({ isSettingsPopoverOpen: !isSettingsPopoverOpen });
  };

  renderField = ({ input, id, label, meta: { touched, error } }) => {
    const fieldClassName = classNames('my-field form-control form-control-sm', { 'my-invalid': error });

    return (
      <div className="form-group row">
        <label htmlFor={id} className="my-label col-sm-4 col-form-label">{label}</label>

        <div className="col-sm-8">
          <input
            {...input}
            id={id}
            type="number"
            min="1"
            className={fieldClassName}
            aria-label={label}
          />
        </div>
      </div>
    )
  };

  render() {
    const { isSettingsPopoverOpen } = this.state;

    return (
      <Fragment>
        <div
          className="my-settings"
          id="settings"
          onClick={this.onToggleSettings}
        >
          <FeatherSettings size={18} />
        </div>

        <Popover
          className="my-settings-popover"
          isOpen={isSettingsPopoverOpen}
          placement="right"
          target="settings"
          toggle={this.onToggleSettings}
        >
          <PopoverBody>
            <form>
              <Field
                id="width"
                name="width"
                label="Width"
                component={this.renderField}
                onChange={this.debouncedOnWidthChange}
              />

              <Field
                id="height"
                name="height"
                label="Height"
                component={this.renderField}
                onChange={this.debouncedOnHeightChange}
              />

              <div className="my-divider row" />

              <Field
                id="playerNumber"
                name="playerNumber"
                label="Players"
                component={this.renderField}
                onChange={this.debouncedOnPlayerNumberChange}
              />
            </form>
          </PopoverBody>
        </Popover>
      </Fragment>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!isFieldPositiveInteger(values.width)) {
    errors.width = 'width should > 0';
  }

  if (!isFieldPositiveInteger(values.height)) {
    errors.height = 'height should > 0';
  }

  if (!isFieldPositiveInteger(values.playerNumber)) {
    errors.playerNumber = 'playerNumber should > 0';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'settingsForm'
})(Settings);
