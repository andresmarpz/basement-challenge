import { styled } from '@/stitches.config';
import { blue } from '@radix-ui/colors';
import * as RadioGroup from '@radix-ui/react-radio-group';

const StyledRoot = styled(RadioGroup.Root, {
	display: 'flex',
	marginLeft: 4,

	'@sm2': {
		marginLeft: 8
	}
});

const StyledItem = styled(RadioGroup.Item, {
	all: 'unset',
	padding: '5px 10px',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'black',
	color: 'white',
	borderRadius: 99,
	marginLeft: 2,
	fontSize: '0.75rem',
	'&[data-state="checked"]': {
		boxShadow: '0 0 0 1px white'
	},
	'&:focus': {
	},
});

const Root = StyledRoot;
const Item = StyledItem;

const SizeSelector = () => {
	return (
		<Root defaultValue='medium'>
			<Item value='small'>S</Item>
			<Item value='medium'>M</Item>
			<Item value='large'>L</Item>
			<Item value='extralarge'>XL</Item>
		</Root>
	);
};

export default SizeSelector;
