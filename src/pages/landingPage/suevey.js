import React from "react";
import ProgressBar from '../../utils/progressBar';
import '../../css/survey.css';

const Survey = () => {


    return (
        <>
            <div className="survey">
                <form className="survey-form">
                    <label htmlFor="media-platform">How did you hear about Us?</label>
                    <select>
                        <option value="youtube">Youtube</option>
                        <option value="instagram">Instagram</option>
                        <option value="twitter">Twitter</option>
                        <option value="news">News/articale/blog</option>
                        <option value="other">Other</option>
                    </select>
                </form>
            </div>
        </>
    )
}

export default Survey;