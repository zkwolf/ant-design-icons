// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CameraFilledSvg from '@ant-design/icons-svg/lib/asn/CameraFilled';

export default {
  name: 'IconCameraFilled',
  displayName: 'CameraFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CameraFilledSvg } },
      children,
    ),
};