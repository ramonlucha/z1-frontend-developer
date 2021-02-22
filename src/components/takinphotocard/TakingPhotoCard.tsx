import React, { FC, useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import { Alert } from "@material-ui/lab";
import { CardContent, Typography, CardMedia } from "@material-ui/core";
import dniNitido from "../static/images/dniNitido.jpg";
import dniOscuro from "../static/images/dniOscuro.jpg";
import { clickHandlerButton } from "../maincard/MainCard";
import "./TakingPhotoCard.css";
import CircularProgress from '@material-ui/core/CircularProgress';

type Props = {
  clickHandler: clickHandlerButton;
};

const TakingPhotoCard: FC<Props> = ({ clickHandler }) => {
  const [validMessage,setValidMessage]= useState(<CircularProgress color="secondary" />);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "React POST Request Example" }),
  };

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    fetch("https://front-exercise.z1.digital/evaluations", requestOptions).then(
      async (response) => {
        const result = await response.json();

        if (result.summary.outcome == "Too Much Glare") {   
          
          setValidMessage(isValid(false));
          console.log(validMessage);
        } else {
          setValidMessage(isValid(true));
          console.log(validMessage);
        }
      }
    );
  }, []);
  const isValid = (valid:boolean) => {
    if (valid == true) {
      return (
        <div>
          <CardMedia
            className="media-approved"
            component="img"
            src={dniNitido}
          ></CardMedia>
          <Alert className="alert" severity="success">
            Pickture taken!
          </Alert>
        </div>
      );
    } else {
      return (
        <div>
          <CardMedia
            className="media-rejected"
            component="img"
            src={dniOscuro}
          ></CardMedia>
          <Alert className="alert" severity="warning">
            Room lighting is too low
          </Alert>
        </div>
      );
    }
  };

  return (
    <div>
      <Card className="card" variant="outlined" style={{ width: "22%" }}>
        <div>
          <CardContent>
            <Typography>
              <text className="take-picture">Take picture</text>
            </Typography>
          </CardContent>
          <CardContent>
            <Typography>
              <text className="card-text">
                Fit your ID card inside the frame.<br></br> The picture will be
                taken automatically
              </text>
            </Typography>
            {validMessage}
          </CardContent>
          <CardContent>
            <button
              className="redondo button-cancel 264 165"
              onClick={() => clickHandler(false)}
            >
              <text className="black-text">CANCEL</text>
            </button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default TakingPhotoCard;
