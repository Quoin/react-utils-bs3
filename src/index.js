import * as ReactBootstrap from 'react-bootstrap';

import { NAME } from './constants';
import setDisplayNames from './set-display-names';

setDisplayNames(ReactBootstrap, NAME, [
    'Accordion',
    'Alert',
    'Badge',
    {
        name: 'Breadcrumb',
        components: [
            'Item'
        ]
    },
    'Button',
    'ButtonGroup',
    'ButtonToolbar',
    {
        name: 'Carousel',
        components: [
            'Caption',
            'Item'
        ]
    },
    'Checkbox',
    'Clearfix',
    'CloseButton',
    'Col',
    'Collapse',
    'ControlLabel',
    {
        name: 'Dropdown',
        components: [
            'ControlledComponent',
            'Menu',
            'Toggle'
        ]
    },
    'DropdownButton',
    'Fade',
    'Form',
    {
        name: 'FormControl',
        components: [
            'Feedback',
            'Static'
        ]
    },
    'FormGroup',
    'Glyphicon',
    'Grid',
    'HelpBlock',
    'Image',
    {
        name: 'InputGroup',
        components: [
            'Addon',
            'Button'
        ]
    },
    'Jumbotron',
    'Label',
    'ListGroup',
    'ListGroupItem',
    {
        name: 'Media',
        components: [
            'Body',
            'Heading',
            'Left',
            'List',
            'ListItem',
            'Right'
        ]
    },
    'MenuItem',
    {
        name: 'Modal',
        components: [
            'Body',
            'Dialog',
            'Footer',
            'Header',
            'Title'
        ]
    },
    'Nav',
    'NavDropdown',
    'NavItem',
    {
        name: 'Navbar',
        components: [
            'Brand',
            'Collapse',
            'ControlledComponent',
            'Form',
            'Header',
            'Link',
            'Text',
            'Toggle'
        ]
    },
    'Overlay',
    'OverlayTrigger',
    'PageHeader',
    'PageItem',
    {
        name: 'Pager',
        components: [
            'Item'
        ]
    },
    {
        name: 'Pagination',
        components: [
            'Ellipsis',
            'First',
            'Item',
            'Last',
            'Next',
            'Prev'
        ]
    },
    {
        name: 'Panel',
        components: [
            'Body',
            'Collapse',
            'ControlledComponent',
            'Footer',
            'Heading',
            'Title',
            'Toggle'
        ]
    },
    {
        name: 'PanelGroup',
        components: [
            'ControlledComponent'
        ]
    },
    'Popover',
    'ProgressBar',
    'Radio',
    'ResponsiveEmbed',
    'Row',
    'SafeAnchor',
    {
        name: 'SplitButton',
        components: [
            'Toggle'
        ]
    },
    {
        name: 'Tab',
        components: [
            {
                name: 'Container',
                components: [
                    'ControlledComponent'
                ]
            },
            'Content',
            'Pane'
        ]
    },
    'Table',
    {
        name: 'Tabs',
        components: [
            'ControlledComponent'
        ]
    },
    'Thumbnail',
    'ToggleButton',
    {
        name: 'ToggleButtonGroup',
        components: [
            'ControlledComponent'
        ]
    },
    'Tooltip',
    'Well'
]);
