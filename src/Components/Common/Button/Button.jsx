import React from "react";
import cls from './Button.module.scss';

const CustomButton = (props) => {
	return (
		<button className={[cls.btn, props.classAdd].join(' ')} type={props.type}>
			{props.name}
		</button>
	)
};

export default CustomButton;