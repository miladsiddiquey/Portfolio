import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skill = () => {

    return (
        <section className="mt-5 container">
            <div>
                <h1 style={{ fontSize: '55px', fontWeight: 'bold', textAlign: 'center' }}>My Skills</h1>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <h4>HTML5</h4>
                    <ProgressBar variant="warning" animated now={95} /><br/>
                    <h4>CSS3</h4>
                    <ProgressBar variant="warning" animated now={75} /><br/>
                    <h4>BOOTSTRAP</h4>
                    <ProgressBar variant="warning" animated now={85} /><br/>
                    <h4>SASS</h4>
                    <ProgressBar variant="warning"  animated now={80} />
                </div>
                <div className="col-md-6">
                <h4>JAVASCRIPT</h4>
                    <ProgressBar variant="warning" animated now={80} /><br/>
                    <h4>ES6</h4>
                    <ProgressBar variant="warning" animated now={80} /><br/>
                    <h4>REACT JS</h4>
                    <ProgressBar variant="warning" animated now={70} /><br/>
                    <h4>MATIRAL UI</h4>
                    <ProgressBar variant="warning"  animated now={75} />
                </div>
            </div>
        </section>
    );
};

export default Skill;