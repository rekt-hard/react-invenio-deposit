// This file is part of React-Invenio-Deposit
// Copyright (C) 2020 CERN.
// Copyright (C) 2020 Northwestern University.
//
// React-Invenio-Deposit is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import { connect } from 'react-redux';
import { submitAction } from '../../state/actions';
import SaveButtonComponent from './SaveButton';
import { FORM_SAVING } from '../../state/types';

const mapStateToProps = (state) => ({
  formState: state.deposit.formState,
});

const mapDispatchToProps = (dispatch) => ({
  saveClick: (event, formik) =>
    dispatch(submitAction(FORM_SAVING, event, formik)),
});

export const SaveButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveButtonComponent);
