import { consoleLogger } from "@influxdata/influxdb-client";
import { makeStyles } from "@material-ui/core";
import MaterialTable from "material-table";
import { useEffect } from "react";
import { getNameList } from "../models/call.api";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  flexDirection: {
    display: "flex",
    justifyContent: "row-reverse",
  },
});

let id: any;
function createdata(tel: any, name: any, macName: any, studentID: any, roomNum: any, time: any) {
  id += 1;
  return { tel, name, macName, studentID, roomNum, time };
}

export default function ComponentTable() {
  const classes = useStyles();

  useEffect(() =>{
  const fetchNameList = async () => {
    const respone = await getNameList()
    console.log(respone)
  }
  fetchNameList()
  }, [])

  return <div style={{ width: "100vw" }} className={classes.table} aria-label="main table" >
    <MaterialTable
      columns={[
        { title: "Telephone", field: "tel" },
        { title: "Name", field: "name" },
        { title: "Student ID", field: "studentID", type: "numeric" },
        { title: "Room", field: "roomNum", },
        { title: "TimeStamp", field: "time", },
      ]}
      data={[
        {
          tel: "0982236081",
          name: "Nakharin",
          studentID: "613040193-6",
          roomNum: "BE:AC:10:00:00:01",
          time: "08/18/2022 09:11 pm",
        },
        {
          tel: "0982236081",
          name: "Nitisak",
          studentID: "613040193-6",
          roomNum: "BE:AC:10:00:00:01",
          time: "08/18/2022 09:11 pm",
        },
        {
          tel: "0982236081",
          name: "Mahaphumee",
          studentID: "613040193-6",
          roomNum: "BE:AC:10:00:00:01",
          time: "08/18/2022 09:11 pm",
        },
        {
          tel: "0982236081",
          name: "Hummet",
          studentID: "313040194-6",
          roomNum: "BA:EC:10:00:00:01",
          time: "08/18/2022 09:11 pm",
        },
      ]}
      title="Name table of Covit 19 checklist"
    />
    
  </div>
}