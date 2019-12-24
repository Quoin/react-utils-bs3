import { NAME } from './constants';

export default (packageModule, packageName, componentName) => {
    if (packageModule[componentName]) {
        const displayName = packageModule[componentName].displayName;

        if (!displayName || displayName.indexOf(NAME) !== 0) {
            packageModule[componentName].displayName = `${packageName}.${componentName}`;
        }
    }
};
