import Api from "../models/api"

const getNameList = async () => {
    const response = await Api.get("https://l4b70829dc.execute-api.us-east-2.amazonaws.com/test/website/data/?room=BE:AC:10:00:00:01&date_start=1642854514732&date_end=1642854970859")
    return response;
}
export { getNameList };