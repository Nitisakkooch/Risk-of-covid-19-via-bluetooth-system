import MaterialTable from "material-table";

export default function ComponentTable() {
  return <div style={{ maxWidth: "100%",  }}>
    <MaterialTable 
      columns={[
        { title: "Name", field: "name" },
        { title: "MAC Address", field: "macName" },
        { title: "RSSI", field: "MAC", type: "numeric" },
        {
          title: "Room",
          field: "building",
          lookup: { 34: "Artizy", 63: "BuayLeng" },
        },
      ]}
      data={[
        {
          name: "Mehmet",
          macName: "00:00:5e:00:53:a1",
          MAC: -38,
          building: 34,
        }, {
          name: "Mehmet",
          macName: "00:00:5e:00:53:a1",
          MAC: -40,
          building: 63,
        },
      ]}
      title="Name table of Covit 19 checklist"
    />
  </div>
}
