declare module '*.scss' {
    const content: { [className: string]:  Properties<string | number, string & {}> };
    export default content;
}
