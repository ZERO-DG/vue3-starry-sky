import StarrySky from './StarrySky';

//按需引入
export { StarrySky };

const components = [StarrySky];

const install = (App) => {
	components.forEach((item) => {
		App.component(item.__name, item);
	});
};

export default { install };
