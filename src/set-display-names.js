import setDisplayName from './set-display-name';

const setDisplayNames = (packageModule, packageName, componentNames) => {
    componentNames.forEach((componentName) => {
        if (typeof componentName === 'string') {
            setDisplayName(packageModule, packageName, componentName);
        } else {
            setDisplayName(packageModule, packageName, componentName.name);
            setDisplayNames(packageModule[componentName.name], `${packageName}.${componentName.name}`, componentName.components);
        }
    });
};

export default setDisplayNames;
