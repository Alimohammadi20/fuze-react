import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function ReactApexchartsDoc() {
  return (
    <>
      <div className="flex w-full items-center justify-between mb-24">
        <Typography variant="h4" className="">
         کامپوننت react-apexcharts
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component="a"
          href="https://github.com/apexcharts/react-apexcharts"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">مرجع اصلی</span>
        </Button>
      </div>

      <Typography className="mb-16" component="p">
       
        بسته بندی React.js برای ApexCharts برای ایجاد تجسم های تعاملی در react.
      </Typography>

      <hr />

      <Typography className="text-32 mt-32 mb-8" component="h2">
        موارد استفاده مثال 
      </Typography>

      <FuseExample
        className="mb-64"
        component={require('./examples/Area.js').default}
        raw={require('!raw-loader!./examples/Area.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/Bar.js').default}
        raw={require('!raw-loader!./examples/Bar.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/Column.js').default}
        raw={require('!raw-loader!./examples/Column.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/Donut.js').default}
        raw={require('!raw-loader!./examples/Donut.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/Line.js').default}
        raw={require('!raw-loader!./examples/Line.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/RadialBar.js').default}
        raw={require('!raw-loader!./examples/RadialBar.js')}
      />

      <Typography className="text-32 mt-32 mb-8" component="h2">
      دموها
      </Typography>

      <ul>
        <li className="mb-8">
          <Link to="/apps/dashboards/analytics">Analytics Dashboard</Link>
        </li>
        <li className="mb-8">
          <Link to="/apps/dashboards/project">Project Dashboard</Link>
        </li>
      </ul>
    </>
  );
}

export default ReactApexchartsDoc;
