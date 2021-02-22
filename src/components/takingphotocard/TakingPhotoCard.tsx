import React, { FC, useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import { Alert } from "@material-ui/lab";
import { CardContent, Typography, CardMedia } from "@material-ui/core";
import dniNitido from "../static/images/dniNitido.jpg";
import dniOscuro from "../static/images/dniOscuro.jpg";
import { clickHandlerButton } from "../maincard/MainCard";
import "./TakingPhotoCard.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import photoService from './photoService';

type Props = {
  clickHandler: clickHandlerButton;
};

const TakingPhotoCard: FC<Props> = ({ clickHandler }) => {
  const [validMessage,setValidMessage]= useState(<CircularProgress color="secondary" />);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    photoService.validatePhoto().then(
      async (response:any) => {
        const result = await response.json();

        if (result.summary.outcome == "Too Much Glare") {   
          
          setValidMessage(isValid(false));
        } else {
          setValidMessage(isValid(true));
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
              <p className="take-picture">Take picture</p>
            </Typography>
          </CardContent>
          <CardContent>
            <Typography>
              <p className="card-text">
                Fit your ID card inside the frame.<br></br> The picture will be
                taken automatically
              </p>
            </Typography>
            {validMessage}
          </CardContent>
          <CardContent>
            <button
              className="redondo button-cancel 264 165"
              onClick={() => clickHandler(false)}
            >
              <p className="black-text">CANCEL</p>
            </button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default TakingPhotoCard;
