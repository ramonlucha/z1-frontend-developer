import React, {FC} from "react";
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from "@material-ui/core";
import "./MainCard.css";

export type clickHandlerButton= (click: boolean)=> void
type Props ={
    clickHandler: clickHandlerButton;
}
const MainCard: FC<Props> = ({clickHandler}) => {
  return (
    <div>
      <Card className="card border-light" variant="outlined" style={{ width: "22%" }}>
        <div>
          <div className="text-izquierda">
            <p className="textBankClient">BankClient</p>
          </div>
          <hr></hr>
          <CardContent>
          <Typography ><text className="scan-your-id">Scan your ID</text></Typography>
          </CardContent>
          <CardContent>
          <Typography >
            <p className="card-text">Take a picture. It may take time to validate your personal
            information.
            </p>
          </Typography>
          </CardContent>
          <CardContent>
            <button className="redondo button-takePicture" onClick={()=> clickHandler(true)}>
              <p className="black-text">TAKE PICTURE</p>
            </button>
            </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default MainCard;
