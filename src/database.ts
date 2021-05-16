import * as Influx from "influx";

const {
  INFLUXDB_USERNAME,
  INFLUXDB_PASSWORD,
  INFLUXDB_HOST,
  INFLUX_DB_DATABASE_NAME,
} = process.env;

const schema = [
  {
    measurement: "response_times",
    fields: {
      download: Influx.FieldType.FLOAT,
      upload: Influx.FieldType.FLOAT,
      ping: Influx.FieldType.FLOAT,
    },
    tags: [],
  },
];

const influx = new Influx.InfluxDB({
  host: INFLUXDB_HOST,
  username: INFLUXDB_USERNAME,
  password: INFLUXDB_PASSWORD,
  database: INFLUX_DB_DATABASE_NAME,
  schema,
});

export const persistMetrics = async ({ download, upload, ping }) =>
  influx.writePoints([
    {
      measurement: "response_times",
      fields: { download, upload, ping },
      tags: {},
    },
  ]);
