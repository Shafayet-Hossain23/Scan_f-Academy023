import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import { FaFileDownload } from 'react-icons/fa';


const ref = React.createRef();

const ReactToPdf = () => {
    return (
        <div className="App">
            <Pdf targetRef={ref} filename="course-overview">
                {({ toPdf }) => <button onClick={toPdf}><FaFileDownload></FaFileDownload></button>}
            </Pdf>
            <div ref={ref}>


                <p style={{ marginTop: "-3000px" }}>Hello</p>
            </div>
        </div>
    );
};


const rootElement = document.getElementById("root");
ReactDOM.render(<ReactToPdf />, rootElement);
export default ReactToPdf;

