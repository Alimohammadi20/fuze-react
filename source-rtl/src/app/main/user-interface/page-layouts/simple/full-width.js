import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

function SimpleFullWidthSample() {
  return (
    <Root
      header={
        <div className="p-24">
          <h4>هدر</h4>
        </div>
      }
      contentToolbar={
        <div className="px-24">
          <h4>محتوای نوار ابزار</h4>
        </div>
      }
      content={
        <div className="p-24">
          <h4>محتوا</h4>
          <br />
          <DemoContent />
        </div>
      }
    />
  );
}

export default SimpleFullWidthSample;
