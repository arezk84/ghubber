// @author Dmitry Patsura <talk@dmtry.me> https://github.com/ovr
// @flow

import {
    ACCOUNT_ISSUES_CREATED_REQUEST,
    ACCOUNT_ISSUES_CREATED_SUCCESS,
    ACCOUNT_ISSUES_CREATED_FAIL
} from 'constants';

// import flow types
import type { IssueEntity } from 'github-flow-js';

export type AccountIssuesState = {
    issues: Array<IssueEntity>,
    // first list fetch
    loading: boolean,
    error: Object|string|null,
}

const initialState: AccountIssuesState = {
    issues: [],
    loading: false,
    error: null,
}

export default (state: AccountIssuesState = initialState, action: Object): AccountIssuesState => {
    switch (action.type) {
        case ACCOUNT_ISSUES_CREATED_REQUEST:
            return {
                ...state,
                issues: [],
                loading: true,
                error: null
            }
        case ACCOUNT_ISSUES_CREATED_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: action.payload
            }
        case ACCOUNT_ISSUES_CREATED_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Unknown error @todo'
            }
        //
        default:
            return state;
    }
}
