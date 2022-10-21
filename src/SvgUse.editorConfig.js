/**
 * @typedef Property
 * @type {object}
 * @property {string} key
 * @property {string} caption
 * @property {string} description
 * @property {string[]} objectHeaders
 * @property {ObjectProperties[]} objects
 * @property {Properties[]} properties
 */

/**
 * @typedef ObjectProperties
 * @type {object}
 * @property {PropertyGroup[]} properties
 * @property {string[]} captions
 */

/**
 * @typedef PropertyGroup
 * @type {object}
 * @property {string} caption
 * @property {PropertyGroup[]} propertyGroups
 * @property {Property[]} properties
 */

/**
 * @typedef Properties
 * @type {PropertyGroup}
 */

/**
 * @typedef Problem
 * @type {object}
 * @property {string} property
 * @property {("error" | "warning" | "deprecation")} severity
 * @property {string} message
 * @property {string} studioMessage
 * @property {string} url
 * @property {string} studioUrl
 */

/**
 * @param {object} values
 * @param {Properties} defaultProperties
 * @param {("web"|"desktop")} target
 * @returns {Properties}
 */
export function getProperties(values, defaultProperties, target) {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
    /* Example
    if (values.myProperty === "custom") {
        delete defaultProperties.properties.myOtherProperty;
    }
    */
    return defaultProperties;
}

// /**
//  * @param {Object} values
//  * @returns {Problem[]} returns a list of problems.
//  */
// export function check(values) {
//    /** @type {Problem[]} */
//    const errors = [];
//    // Add errors to the above array to throw errors in Studio and Studio Pro.
//    /* Example
//    if (values.myProperty !== "custom") {
//        errors.push({
//            property: `myProperty`,
//            message: `The value of 'myProperty' is different of 'custom'.`,
//            url: "https://github.com/myrepo/mywidget"
//        });
//    }
//    */
//    return errors;
// }

// /**
//  * @param {object} values
//  * @param {boolean} isDarkMode
//  * @returns {object}
//  */
export function getPreview(values, isDarkMode) {
    // Customize your pluggable widget appearance for Studio Pro.
    // return {
    //     type: "Container",
    //     children: []
    // };
    const mySvgImage = `
        <svg width="40" height="40">
            <rect fill="${isDarkMode ? "#465BE0" : "#0397ec"}" width="40" height="40" rx="4" ry="4" />
            <path fill="${isDarkMode ? "#313131" : "#fff"}" d="M2.92,24.88l1.96-2.36c.98,.74,2.14,1.26,3.32,1.26,1.04,0,1.44-.34,1.44-.76,0-.76-.68-.92-1.88-1.42l-1.62-.68c-1.5-.56-2.74-1.74-2.74-3.62,0-2.22,2-4.04,4.96-4.04,1.54,0,3.18,.56,4.44,1.74l-1.72,2.16c-.94-.62-1.68-.94-2.92-.94-.76,0-1.28,.28-1.28,.88s.74,.82,2.04,1.3l1.5,.62c1.74,.64,2.74,1.76,2.74,3.56,0,2.2-1.84,4.16-5.2,4.16-1.7,0-3.58-.6-5.04-1.86Z"/>
            <path fill="${isDarkMode ? "#313131" : "#fff"}" d="M14.12,13.5h3.64l1.36,5.68c.36,1.38,.6,2.72,.96,4.12h.08c.36-1.4,.62-2.74,.96-4.12l1.32-5.68h3.52l-3.84,13h-4.16l-3.84-13Z"/>
            <path fill="${isDarkMode ? "#313131" : "#fff"}" d="M26.84,20.1c0-4.4,2.74-6.84,6.12-6.84,1.76,0,3.02,.8,3.88,1.68l-1.88,2.12c-.54-.52-1.06-.84-2-.84-1.42,0-2.58,1.4-2.58,3.76s.9,3.8,2.76,3.8c.32,0,.68-.08,.88-.24v-1.8h-1.62v-2.8h4.68v6.2c-.88,.8-2.48,1.6-4.14,1.6-3.34,0-6.1-2.2-6.1-6.64Z"/>
        </svg>`;
    return {
        type: "Container", borders: false, backgroundColor: isDarkMode ? "#313131" : "#eaeaea", children: [
            { type: "RowLayout",
            columnSize: "grow",
            padding: 10,
            children: [
                { type: "Image", document: mySvgImage, width: 40, grow: 0 },
                {
                    type: "Container", children: [
                        { type: "Text", fontColor: isDarkMode ? "#FFF" : "#000", fontSize: 12, content: ` ${values.svgName}` },
                        { type: "Text", fontColor: isDarkMode ? "#FFF" : "#000", fontSize: 8, content: ` ${values.svgSize}px${values.svgColorVar ? ',' : ''} ${values.svgColorVar}` },
                ], grow: 1 }
            ]}
        ]
    }
}

// /**
//  * @param {Object} values
//  * @param {("web"|"desktop")} platform
//  * @returns {string}
//  */
// export function getCustomCaption(values, platform) {
//     return "SvgUse";
// }