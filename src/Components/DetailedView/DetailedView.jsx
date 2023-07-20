import React, { useRef, useState } from "react";
import "./DetailedView.css"
import CommentCard from "../CommentCard/CommentCard";
import { useLayoutEffect } from "react";
import { useContext } from "react";
import DataContext from "../../Data/DataContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { ExportToExcel } from "../../schemas/ExportToExcel";
import Tooltip from '@mui/material/Tooltip';
const DetailedView = () => {const ddData = [
  { text: "A4", value: "size-a4" },
];

const [layoutSelection, setLayoutSelection] = useState({
  text: "A4",
  value: "size-a4"
});


const updatePageLayout = event => {
  setLayoutSelection(event.target.value);
};

const pdfExportComponent = useRef(null);

const handleExportWithComponent = event => {
  pdfExportComponent.current.save();
};

  const {id} = useParams();
  const {authMiddleware, data, setData ,summary, setSummary, list, setList,auth} = useContext(DataContext);
  
  useLayoutEffect(()=>{
    authMiddleware();
    console.log(id);
  },[])

  useEffect(()=>{
    axios.get(`https://localhost:7265/api/Idea/${id}`).then((response)=>{
      setData(response.data);
      console.log(response.data);
    })
    axios.get("https://localhost:7265/api/Comments").then((response)=>{
      setList(response.data)
    })
  },[])


  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("https://localhost:7265/api/Comments", 
    {
      taskid:id,
      comment:summary,
      userId:auth.id
    }).then((response)=>{
      axios.get("https://localhost:7265/api/Comments").then((response)=>{
        setList(response.data);
        setSummary(" ")
      })
      console.log(response.data);  
          
    })
    

  }
  const [data1, setData1] = React.useState([])
  const fileName = "mysamplefile"; // here enter filename for your excel file

  React.useEffect(() => {
    const fetchData = () =>{
     axios.get('https://localhost:7265/api/Idea/excel').then(r => setData1(r.data) )
    }
    fetchData()
  }, [])
  return (
    <>
    <PDFExport ref={pdfExportComponent}>
    <div className={`pdf-page ${layoutSelection.value}`}>
    <div className="detailed-idea-container">
      <div className="detailed-content">
        <div className="detailed-content-main">
          <h2>{data.title}</h2>
          <div className='submit-idea-details'> <ExportToExcel apiData={data1} fileName={fileName} /><Tooltip title="Download"><i class='bi bi-cloud-arrow-down' primary={true} onClick={handleExportWithComponent} style={{fontSize:"24px"}}/> </Tooltip></div>
          <div className="detailed-all">
            <div>
              <h4>Owner</h4>
              <div className="NAME-CARD"></div>
            </div>
            <div>
              <h4>Contributors</h4>
              <div className="total-container">
                <div className="contributors-container">
                  <div className="NAME-CARD"></div>
                  <div className="NAME-CARD"></div>
                  <div className="NAME-CARD"></div>
                  <div className="NAME-CARD"></div>
                  <div className="NAME-CARD"></div>
                </div>
              </div>
            </div>
            <div>
              <h4>Created on</h4>
              <p>{data.ideaCreatedDate}</p>
            </div>
            <div className="detailed-summary">
              <h4>Summary</h4>
              <p>{data.shortDescription}</p>  
            </div>
            
          </div>
        </div>
        <div className="long-description">
          <h2>Description</h2>
          <p>{data.longDescription}</p>

        </div>
        <div className="detailed-idea-status">
          <h2>Status</h2>
          <div>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" className="img-icon"/>
              <p>Approved</p>
            </div>
            <div className="approver-status">
              <p>Approver Name</p>
              <p>Sadham Usen</p>
            </div>
            <div className="approver-status">
              <p>Approved on</p>
              <p>07/16/2023</p>
            </div>

          </div>

        </div>
      </div>
      <div className="detailed-comments">
        <div>
          <form onSubmit={handleSubmit}>
            <input value={summary} placeholder="Enter Comments" onChange={(e)=>setSummary(e.target.value)}/>
          </form>          
          <div>
            {
              list.map((l)=>{console.log(l);return(
                
                <CommentCard
                  name={l.user}
                  comments={l.comments}
                  commentsDate={l.commentsDate}
                  

                 />

              )})
            }
            
          </div>
        </div>
      </div>
    </div>
    </div>
    </PDFExport>      
    </>
  );
};

export default DetailedView;
