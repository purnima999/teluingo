import React from "react";
import '../../css/units.css';
import { Row, Col, Container } from 'reactstrap';
import '../../css/custom.css';
import { useDispatch } from 'react-redux';
import GuideBook from "./guideBook";
import { setDisplayComponents } from '../../store/actions';
import { PageNavigation } from '../../utils/pageNavigation';
import { useNavigate } from 'react-router-dom';

const Units = () => {

    const dispatch = useDispatch();
    const guideBook = GuideBook;

    const navigate = useNavigate();
    const redirectRoute = () => navigate('/lesson1');

    return (
        <>
            <div className="units" xs="2">
                <div className="unit-header">
                    <h3>Unit 1</h3>
                    <button className="custom-btn" onClick={() => dispatch(setDisplayComponents(guideBook))}>Guide Book</button>
                </div>
                <div className="unit-body">
                    <button className="custom-btn" id="unit-body-btn" onClick={() => redirectRoute()}>--</button>
                </div>
            </div>
        </>
    )
}
export default Units;