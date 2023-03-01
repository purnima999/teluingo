import React from 'react';
import '../../css/landingPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayComponents } from '../../store/actions';
import Survey from './suevey';
import ProgressBar from '../../utils/progressBar';
import { useNavigate } from 'react-router-dom';
import '../../css/custom.css';

const LandingPageManager = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state);
    let SurveyCmp = Survey;

    const navigate = useNavigate();
    const redirectRoute = () => navigate('/Home');

    return (
        <div id="landingPage">

            <div className='page-header'>
                <p>teluingo</p>
            </div>
            <div className='page-body'>
                <h3>
                    teluingo is a web application that allows you to learn a new language.
                </h3>
                {/* <button onClick={() => dispatch(setDisplayComponents(SurveyCmp))}>get started</button> */}
                <button className="custom-btn" onClick={() => redirectRoute()}>get started</button>

            </div>
        </div>
    )
}

export default LandingPageManager;