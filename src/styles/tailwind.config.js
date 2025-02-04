module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Your project's content files
    theme: {
        extend: {
            fontFamily: {
                primary: [
                    'var(--font-primary)',
                    'sans-serif'
                ],
                fallback: [
                    'var(--font-fallback)',
                    'sans-serif'
                ]
            },
            fontSize: {
                h1: [
                    'var(--fontsize-h1-desktop)',
                    {
                        lineHeight: 'var(--lineheight-h1-desktop)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                h1Mobile: [
                    'var(--fontsize-h1-mobile)',
                    {
                        lineHeight: 'var(--lineheight-h1-mobile)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                h2: [
                    'var(--fontsize-h2-desktop)',
                    {
                        lineHeight: 'var(--lineheight-h2-desktop)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                h2Mobile: [
                    'var(--fontsize-h2-mobile)',
                    {
                        lineHeight: 'var(--lineheight-h2-mobile)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                h3: [
                    'var(--fontsize-h3-desktop)',
                    {
                        lineHeight: 'var(--lineheight-h3-desktop)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                h3Mobile: [
                    'var(--fontsize-h3-mobile)',
                    {
                        lineHeight: 'var(--lineheight-h3-mobile)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                h4: [
                    'var(--fontsize-h4-desktop)',
                    {
                        lineHeight: 'var(--lineheight-h4-desktop)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                h4Mobile: [
                    'var(--fontsize-h4-mobile)',
                    {
                        lineHeight: 'var(--lineheight-h4-mobile)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                h5: [
                    'var(--fontsize-h5-desktop)',
                    {
                        lineHeight: 'var(--lineheight-h5-desktop)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                h5Mobile: [
                    'var(--fontsize-h5-mobile)',
                    {
                        lineHeight: 'var(--lineheight-h5-mobile)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                h6: [
                    'var(--fontsize-h6-desktop)',
                    {
                        lineHeight: 'var(--lineheight-h6-desktop)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                h6Mobile: [
                    'var(--fontsize-h6-mobile)',
                    {
                        lineHeight: 'var(--lineheight-h6-mobile)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                'subtitle-1': [
                    'var(--fontsize-subtitle-lg-desktop)',
                    {
                        lineHeight: 'var(--lineheight-subtitle-lg-desktop)',
                        fontWeight: 'var(--font-weight-regular)',
                        textTransform: 'capitalize'
                    }
                ],
                'subtitle-1-Bold': [
                    'var(--fontsize-subtitle-lg-desktop)',
                    {
                        lineHeight: 'var(--lineheight-subtitle-lg-desktop)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                'subtitle-1-Mobile': [
                    'var(--fontsize-subtitle-lg-mobile)',
                    {
                        lineHeight: 'var(--lineheight-subtitle-lg-mobile)',
                        fontWeight: 'var(--font-weight-regular)',
                        textTransform: 'capitalize'
                    }
                ],
                'subtitle-1-Bold-Mobile': [
                    'var(--fontsize-subtitle-lg-mobile)',
                    {
                        lineHeight: 'var(--lineheight-subtitle-lg-mobile)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                'subtitle-2': [
                    'var(--fontsize-subtitle-sm-desktop)',
                    {
                        lineHeight: 'var(--lineheight-subtitle-sm-desktop)',
                        fontWeight: 'var(--font-weight-regular)',
                        textTransform: 'capitalize'
                    }
                ],
                'subtitle-2-Bold': [
                    'var(--fontsize-subtitle-sm-desktop)',
                    {
                        lineHeight: 'var(--lineheight-subtitle-sm-desktop)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                'subtitle-2-Mobile': [
                    'var(--fontsize-subtitle-sm-mobile)',
                    {
                        lineHeight: 'var(--lineheight-subtitle-sm-mobile)',
                        fontWeight: 'var(--font-weight-regular)',
                        textTransform: 'capitalize'
                    }
                ],
                'subtitle-2-Bold-Mobile': [
                    'var(--fontsize-subtitle-sm-mobile)',
                    {
                        lineHeight: 'var(--lineheight-subtitle-sm-mobile)',
                        fontWeight: 'var(--font-weight-bold)',
                        textTransform: 'capitalize'
                    }
                ],
                'body-1': [
                    'var(--fontsize-body-lg-desktop)',
                    {
                        lineHeight: 'var(--lineheight-body-lg-desktop)',
                        fontWeight: 'var(--font-weight-regular)',
                    }
                ],
                'body-1-Mobile': [
                    'var(--fontsize-body-lg-mobile)',
                    {
                        lineHeight: 'var(--lineheight-body-lg-mobile)',
                        fontWeight: 'var(--font-weight-regular)',
                    }
                ],
                'body-base': [
                    'var(--fontsize-body-base-desktop)',
                    {
                        lineHeight: 'var(--lineheight-body-base-desktop)',
                        fontWeight: 'var(--font-weight-regular)',
                    }
                ],
                'body-base-Bold': [
                    'var(--fontsize-body-base-desktop)',
                    {
                        lineHeight: 'var(--lineheight-body-base-desktop)',
                        fontWeight: 'var(--font-weight-bold)',
                    }
                ],
                'body-base-Mobile': [
                    'var(--fontsize-body-base-mobile)',
                    {
                        lineHeight: 'var(--lineheight-body-base-mobile)',
                        fontWeight: 'var(--font-weight-regular)',
                    }
                ],
                'body-base-Bold-Mobile': [
                    'var(--fontsize-body-base-mobile)',
                    {
                        lineHeight: 'var(--lineheight-body-base-mobile)',
                        fontWeight: 'var(--font-weight-bold)',
                    }
                ],
                'caption-1': [
                    'var(--fontsize-caption-lg-desktop)',
                    {
                        lineHeight: 'var(--lineheight-caption-lg-desktop)',
                        fontWeight: 'var(--font-weight-regular)',
                    }
                ],
                'caption-1-Mobile': [
                    'var(--fontsize-caption-lg-mobile)',
                    {
                        lineHeight: 'var(--lineheight-caption-lg-mobile)',
                        fontWeight: 'var(--font-weight-regular)',
                    }
                ],
                'caption-2': [
                    'var(--fontsize-caption-sm-desktop)',
                    {
                        lineHeight: 'var(--lineheight-caption-sm-desktop)',
                        fontWeight: 'var(--font-weight-light)',
                    }
                ],
                'caption-2-Mobile': [
                    'var(--fontsize-caption-sm-mobile)',
                    {
                        lineHeight: 'var(--lineheight-caption-sm-mobile)',
                        fontWeight: 'var(--font-weight-light)',
                    }
                ],
                'overline-1': [
                    'var(--fontsize-overline-lg-desktop)',
                    {
                        lineHeight: 'var(--lineheight-overline-lg-desktop)',
                        fontWeight: 'var(--font-weight-light)',
                    }
                ],
                'overline-1-Mobile': [
                    'var(--fontsize-overline-lg-mobile)',
                    {
                        lineHeight: 'var(--lineheight-overline-lg-mobile)',
                        fontWeight: 'var(--font-weight-light)',
                    }
                ],
                'overline-2': [
                    'var(--fontsize-overline-sm-desktop)',
                    {
                        lineHeight: 'var(--lineheight-overline-sm-desktop)',
                        fontWeight: 'var(--font-weight-regular)',
                    }
                ],
                'overline-2-Mobile': [
                    'var(--fontsize-overline-sm-mobile)',
                    {
                        lineHeight: 'var(--lineheight-overline-sm-mobile)',
                        fontWeight: 'var(--font-weight-regular)',
                    }
                ]
            },
            fontWeight: {
                extralight: 'var(--font-weight-extralight)',
                light: 'var(--font-weight-light)',
                regular: 'var(--font-weight-regular)',
                medium: 'var(--font-weight-medium)',
                semibold: 'var(--font-weight-semibold)',
                bold: 'var(--font-weight-bold)',
                extrabold: 'var(--font-weight-extrabold)',
                black: 'var(--font-weight-black)'
            },
            colors: {
                text: {
                    primary: 'var(--text-primary)',
                    secondary: 'var(--text-secondary)',
                    tertiary: 'var(--text-tertiary)',
                    action: 'var(--text-action)',
                    'action-hover': 'var(--text-action-hover)',
                    'action-press': 'var(--text-action-press)',
                    disabled: 'var(--text-disabled)',
                    information: 'var(--text-information)',
                    success: 'var(--text-success)',
                    warning: 'var(--text-warning)',
                    error: 'var(--text-error)',
                    'on-action': 'var(--text-on-action)',
                    'on-hover': 'var(--text-on-hover)',
                    'on-disable': 'var(--text-on-disable)',
                    'on-press': 'var(--text-on-press)',
                    'on-action-danger': 'var(--text-on-action-danger)',
                    'on-action-danger-hover': 'var(--text-on-action-danger-hover)',
                    'on-action-danger-press': 'var(--text-on-action-danger-press)'
                },
                surface: {
                    page: 'var(--surface-page)',
                    primary: 'var(--surface-primary)',
                    secondary: 'var(--surface-secondary)',
                    tertiary: 'var(--surface-tertiary)',
                    information: 'var(--surface-information)',
                    success: 'var(--surface-success)',
                    warning: 'var(--surface-warning)',
                    error: 'var(--surface-error)',
                    disabled: 'var(--surface-disabled)',
                    action: 'var(--surface-action)',
                    'action-hover': 'var(--surface-action-hover)',
                    'action-press': 'var(--surface-action-press)',
                    'action-disabled': 'var(--surface-action-disabled)',
                    'action-danger': 'var(--surface-action-danger)',
                    'action-danger-hover': 'var(--surface-action-danger-hover)',
                    'action-danger-press': 'var(--surface-action-danger-press)'
                },
                icon: {
                    primary: 'var(--icon-primary)',
                    secondary: 'var(--icon-secondary)',
                    tertiary: 'var(--icon-tertiary)',
                    disabled: 'var(--icon-disabled)',
                    information: 'var(--icon-information)',
                    success: 'var(--icon-success)',
                    warning: 'var(--icon-warning)',
                    error: 'var(--icon-error)',
                    'action-primary': 'var(--icon-action-primary)',
                    'on-action': 'var(--icon-on-action)',
                    'on-action-hover': 'var(--icon-on-action-hover)',
                    'on-action-press': 'var(--icon-on-action-press)',
                    'on-action-disable': 'var(--icon-on-action-disable)',
                    'on-action-danger': 'var(--icon-on-action-danger)',
                    'on-action-danger-hover': 'var(--icon-on-action-danger-hover)',
                    'on-action-danger-press': 'var(--icon-on-action-danger-press)'
                },
                border: {
                    primary: 'var(--border-primary)',
                    secondary: 'var(--border-secondary)',
                    information: 'var(--border-information)',
                    success: 'var(--border-success)',
                    warning: 'var(--border-warning)',
                    error: 'var(--border-error)',
                    disabled: 'var(--border-disabled)',
                    action: 'var(--border-action)',
                    'action-press-focus': 'var(--border-action-press-focus)',
                    'action-hover': 'var(--border-action-hover)',
                    'on-action-danger-focus': 'var(--border-on-action-danger-focus)',
                    'on-action-warning-focus': 'var(--border-on-action-warning-focus)'
                }
            },
            borderRadius: {
                xs: 'var(--radius-xs-desktop)',
                'xs-Mobile': 'var(--radius-xs-mobile)',
                sm: 'var(--radius-sm-desktop)',
                'sm-Mobile': 'var(--radius-sm-mobile)',
                md: 'var(--radius-md-desktop)',
                'md-Mobile': 'var(--radius-md-mobile)',
                lg: 'var(--radius-lg-desktop)',
                'lg-Mobile': 'var(--radius-lg-mobile)',
                xl: 'var(--radius-xl-desktop)',
                'xl-Mobile': 'var(--radius-xl-mobile)',
            },
            spacing: {
                xss: 'var(--spacing-xss-desktop)',
                'xss-Mobile': 'var(--spacing-xss-mobile)',
                xs: 'var(--spacing-xs-desktop)',
                'xs-Mobile': 'var(--spacing-xs-mobile)',
                sm: 'var(--spacing-sm-desktop)',
                'sm-Mobile': 'var(--spacing-sm-mobile)',
                md: 'var(--spacing-md-desktop)',
                'md-Mobile': 'var(--spacing-md-mobile)',
                lg: 'var(--spacing-lg-desktop)',
                'lg-Mobile': 'var(--spacing-lg-mobile)',
                xl: 'var(--spacing-xl-desktop)',
                'xl-Mobile': 'var(--spacing-xl-mobile)',
                xxl: 'var(--spacing-xxl-desktop)',
                'xxl-Mobile': 'var(--spacing-xxl-mobile)',
                x3l: 'var(--spacing-x3l-desktop)',
                'x3l-Mobile': 'var(--spacing-x3l-mobile)',
                x4l: 'var(--spacing-x4l-desktop)',
                'x4l-Mobile': 'var(--spacing-x4l-mobile)'
            },
            borderWidth: {
                sm: 'var(--border-sm-desktop)',
                'sm-Mobile': 'var(--border-sm-mobile)',
                DEFAULT: 'var(--border-default-desktop)',
                'default-Mobile': 'var(--border-default-mobile)',
                lg: 'var(--border-lg-desktop)',
                'lg-Mobile': 'var(--border-lg-mobile)',
            },
        }
    },
};

