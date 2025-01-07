import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import useDeviceDetect from '@/libs/hooks/useDeviceDetect';
import { Stack } from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';

const Community: NextPage = () => {
	const [title, setTitle] = useState<string>('hello');

	const device = useDeviceDetect();

	if (device == 'mobile') {
		return <Stack>Community MOBILE</Stack>;
	} else {
		return (
			<div>
				Community{' '}
				<button onClick={() => alert('Hello MIT!')} style={{ margin: '15px' }}>
					Press Me!
				</button>
			</div>
		);
	}
};

export default withLayoutBasic(Community);
