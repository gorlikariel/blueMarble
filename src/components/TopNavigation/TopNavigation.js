import React, { Component } from "react";
import {
  AppBar,
  IconButton,
  withStyles,
  Typography,
  Toolbar
} from "@material-ui/core";
import theme from "../../styleguide/theme";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionsIndex";
import { Link } from "react-router-dom";
import Checkmark from "../../Icons/Checkmark/Checkmark";
import CogwheelIcon from "../../Icons/CogwheelIcon/CogwheelIcon";
import LeftArrow from "../../Icons/LeftArrow/LeftArrow";

class TopNavigation extends Component {
  submitForm = navText => {
    this.props.updatePillSettings(this.props.pillSettings);
  };
  render() {
    const {
      title,
      showLeftArrow,
      showSubmit,
      showSettingsIcon,
      backOnClick
    } = this.props;
    const leftArrow = (
      <IconButton
        onClick={() => {
          backOnClick ? backOnClick() : this.props.history.goBack();
        }}
      >
        <LeftArrow />
      </IconButton>
    );
    const submitButton = (
      <IconButton onClick={() => this.submitForm("POOP")}>
        <Checkmark />
      </IconButton>
    );
    const settingsIcon = (
      <Link to="/settings">
        <IconButton>
          <CogwheelIcon />
        </IconButton>
      </Link>
    );
    const styles = {
      root: {
        backgroundColor: "inherit",
        boxShadow: "0 0 0 0",
        marginTop: "25px"
      }
    };
    const topNavigationComponent = (
      <AppBar position="fixed" style={styles.root}>
        <Toolbar disableGutters>
          {showLeftArrow ? leftArrow : null}
          <div style={{ marginLeft: "5px" }}>
            <Typography variant="title" color="primary">
              {title}
            </Typography>
          </div>
          <div style={{ marginLeft: "auto" }}>
            {showSubmit ? submitButton : null}
            {showSettingsIcon ? settingsIcon : null}
          </div>
        </Toolbar>
      </AppBar>
    );
    return title || showLeftArrow || showSettingsIcon
      ? topNavigationComponent
      : null;
  }
}

const mapStateToProps = state => {
  return {
    accountSettings: state.accountSettings.form,
    alarmSettings: state.alarmSettings.form,
    pillSettings: state.pillSettings.form,
    title: state.topNavigation.title,
    showLeftArrow: state.topNavigation.showLeftArrow,
    showSubmit: state.topNavigation.showSubmit,
    showSettingsIcon: state.topNavigation.showSettingsIcon,
    backOnClick: state.topNavigation.backOnClick
  };
};

export default connect(mapStateToProps, null)(TopNavigation);