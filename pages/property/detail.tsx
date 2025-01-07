import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import useDeviceDetect from '@/libs/hooks/useDeviceDetect';
import { Container, Stack } from '@mui/material';
import { NextPage } from 'next';

const PropertyDetail: NextPage = () => {
	const device = useDeviceDetect();

	if (device == 'mobile') {
		return <Stack>Property Detail MOBILE</Stack>;
	} else {
		return <Container>PROPERTY DETAIL</Container>;
	}
};

export default withLayoutBasic(PropertyDetail);
