import { consoleLogger } from "@influxdata/influxdb-client";
import { makeStyles } from "@material-ui/core";
import MaterialTable from "material-table";
import axios from "../models/callApi";
import React, { useContext, useEffect, useState } from 'react';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  flexDirection: {
    display: "flex",
    justifyContent: "row-reverse",
  },
});

/* let id: any;
function createdata(tel: any, name: any, studentID: any, roomNum: any, time: any) {
  id += 1;
  return { tel, name, studentID, roomNum, time };
} */

type Item = {
  tel: string,
  name: string,
  studentID: string
  room: string
  timestamp: number | string | Date
}

interface RespondsAPI {
  Items: Item[],
  Count: number,
  ScannedCount: number
}

export default function ComponentTable() {
  const classes = useStyles();
  const [dataTable, setDataTable] = useState<Item[]>([])
  console.log("Call ComponentTable");
  useEffect(() => {
    const fetchNameList = async () => {
      const respone = await axios.get<RespondsAPI>("/test/website/data/?room=BE:AC:10:00:00:01&date_start=0&date_end=1642854970859")
      setDataTable(respone.data.Items)
      console.log(respone)
    }
    fetchNameList()
  }, [])

  const converstData = (data: Item[]) => data.map(it => ({ ...it, timestamp: new Date(+it.timestamp).toDateString() }))

  return <div style={{ width: "100vw" }} className={classes.table} aria-label="main table" >
    <MaterialTable
      columns={[
        { title: "Telephone", field: "tel" },
        { title: "Name", field: "name" },
        { title: "Student ID", field: "studentID", type: "numeric" },
        { title: "Room", field: "room", },
        { title: "TimeStamp", field: "timestamp", },
      ]}
      data={converstData(dataTable)}
      title="Name table of Covit 19 checklist"
    />

  </div>
}