// flow-typed signature: dc2dbd88bf203c444092c80d065a1883
// flow-typed version: module/@react-pdf/renderer_v1.6.8/flow_v0.112.0

declare module "@react-pdf/renderer" {
  declare var ReactPDF: typeof npm$namespace$ReactPDF;

  declare var npm$namespace$ReactPDF: {|
    Font: typeof ReactPDF$Font,
    StyleSheet: typeof ReactPDF$StyleSheet,
    version: typeof ReactPDF$version,
    PDFRenderer: typeof ReactPDF$PDFRenderer,
    createInstance: typeof ReactPDF$createInstance,
    pdf: typeof ReactPDF$pdf,
    renderToStream: typeof ReactPDF$renderToStream,
    renderToFile: typeof ReactPDF$renderToFile,
    render: typeof ReactPDF$render,

    Document: typeof ReactPDF$Document,
    Page: typeof ReactPDF$Page,
    View: typeof ReactPDF$View,
    Image: typeof ReactPDF$Image,
    Text: typeof ReactPDF$Text,
    Link: typeof ReactPDF$Link,
    Note: typeof ReactPDF$Note,
    Canvas: typeof ReactPDF$Canvas,
    BlobProvider: typeof ReactPDF$BlobProvider,
    PDFViewer: typeof ReactPDF$PDFViewer,
    PDFDownloadLink: typeof ReactPDF$PDFDownloadLink,
    Svg: $FlowFixMe,
    Path: $FlowFixMe,
    Circle: $FlowFixMe,
  |};
  declare export type ReactPDF$Style = {|
    +alignContent?:
      | "flex-start"
      | "flex-end"
      | "center"
      | "stretch"
      | "space-between"
      | "space-around",
    +alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline",
    +alignSelf?:
      | "auto"
      | "flex-start"
      | "flex-end"
      | "center"
      | "baseline"
      | "stretch",
    +flex?: number,
    +flexDirection?: "row" | "row-reverse" | "column" | "column-reverse",
    +flexWrap?: "nowrap" | "wrap" | "wrap-reverse",
    +flexFlow?: number,
    +flexGrow?: number,
    +flexShrink?: number,
    +flexBasis?: number,
    +justifyContent?:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-around"
      | "space-between"
      | "space-evenly",
    +order?: number,
    +bottom?: number | string,
    +display?: "flex" | "table" | "none",
    +left?: number | string,
    +position?: "absolute" | "relative",
    +right?: number | string,
    +top?: number | string,
    +height?: number | string,
    +maxHeight?: number | string,
    +maxWidth?: number | string,
    +minHeight?: number | string,
    +minWidth?: number | string,
    +width?: number | string,
    +backgroundColor?: string,
    +color?: string,
    +opacity?: number,
    +fontSize?: number | string,
    +fontFamily?: string,
    +fontStyle?: string | "normal",
    +fontWeight?:
      | number
      | "thin"
      | "hairline"
      | "ultralight"
      | "extralight"
      | "light"
      | "normal"
      | "medium"
      | "semibold"
      | "demibold"
      | "bold"
      | "ultrabold"
      | "extrabold"
      | "heavy"
      | "black",
    +letterSpacing?: number | string,
    +lineHeight?: number | string,
    +maxLines?: number,
    +textAlign?: "left" | "right" | "center" | "justify",
    +textDecoration?: "line-through" | "underline" | "none",
    +textDecorationColor?: string,
    +textDecorationStyle?: "dashed" | "dotted" | "solid" | string,
    +textIndent?: any,
    +textOverflow?: any,
    +textTransform?: "capitalize" | "lowercase" | "uppercase",
    +objectFit?: string,
    +objectPosition?: number | string,
    +objectPositionX?: number | string,
    +objectPositionY?: number | string,
    +margin?: number | string,
    +marginHorizontal?: number | string,
    +marginVertical?: number | string,
    +marginTop?: number | string,
    +marginRight?: number | string,
    +marginBottom?: number | string,
    +marginLeft?: number | string,
    +padding?: number | string,
    +paddingHorizontal?: number | string,
    +paddingVertical?: number | string,
    +paddingTop?: number | string,
    +paddingRight?: number | string,
    +paddingBottom?: number | string,
    +paddingLeft?: number | string,
    transform?: string,
    +transformOrigin?: number | string,
    +transformOriginX?: number | string,
    +transformOriginY?: number | string,
    +border?: number | string,
    +borderWidth?: number,
    +borderColor?: string,
    +borderStyle?: "dashed" | "dotted" | "solid",
    +borderTop?: number | string,
    +borderTopColor?: string,
    +borderTopStyle?: "dashed" | "dotted" | "solid",
    +borderTopWidth?: number | string,
    +borderRight?: number | string,
    +borderRightColor?: string,
    +borderRightStyle?: "dashed" | "dotted" | "solid",
    +borderRightWidth?: number | string,
    +borderBottom?: number | string,
    +borderBottomColor?: string,
    +borderBottomStyle?: "dashed" | "dotted" | "solid",
    +borderBottomWidth?: number | string,
    +borderLeft?: number | string,
    +borderLeftColor?: string,
    +borderLeftStyle?: "dashed" | "dotted" | "solid",
    +borderLeftWidth?: number | string,
    +borderTopLeftRadius?: number | string,
    +borderTopRightRadius?: number | string,
    +borderBottomRightRadius?: number | string,
    +borderBottomLeftRadius?: number | string,
    +borderRadius?: number | string,
    +zIndex?: number,
    +overflow?: "visible" | "hidden" | "scroll",
    +gap?: string | number,
    +columnGap?: string,
    +rowGap?: string,
  |}

  declare interface ReactPDF$Styles {
    [key: string]: $Exact<ReactPDF$Style>;
  }

  declare type ReactPDF$Orientation = "portrait" | "landscape";

  declare interface ReactPDF$DocumentProps {
    title?: string;
    author?: string;
    subject?: string;
    keywords?: string;
    creator?: string;
    producer?: string;
    onRender?: () => any;
  }

  /**
   * This component represent the PDF document itself. It must be the root
   * of your tree element structure, and under no circumstances should it be
   * used as children of another react-pdf component. In addition, it should
   * only have children of type <Page />.
   */
  declare class ReactPDF$Document
    mixins React$Component<ReactPDF$DocumentProps> {}

  declare interface ReactPDF$NodeProps {
    style?: ReactPDF$Style | ReactPDF$Style[];

    /**
     * Render component in all wrapped pages.
     * @see https://react-pdf.org/advanced#fixed-components
     */
    fixed?: boolean;

    /**
     * Force the wrapping algorithm to start a new page when rendering the
     * element.
     * @see https://react-pdf.org/advanced#page-breaks
     */
    break?: boolean;

    /**
     * Hint that no page wrapping should occur between all sibling elements following the element within n points
     * @see https://react-pdf.org/advanced#orphan-&-widow-protection
     */
    minPresenceAhead?: number;
  }

  declare type ReactPDF$PageProps = {
    /**
     * Enable page wrapping for this page.
     * @see https://react-pdf.org/components#page-wrapping
     */
    wrap?: boolean,
    debug?: boolean,
    size?:
      | string
      | [number, number]
      | {
          width: number,
          height: number,
          ...
        },
    orientation?: ReactPDF$Orientation,
    ruler?: boolean,
    rulerSteps?: number,
    verticalRuler?: boolean,
    verticalRulerSteps?: number,
    horizontalRuler?: boolean,
    horizontalRulerSteps?: number,
    ...
  } & ReactPDF$NodeProps;

  /**
   * Represents single page inside the PDF document, or a subset of them if
   * using the wrapping feature. A <Document /> can contain as many pages as
   * you want, but ensure not rendering a page inside any component besides
   * Document.
   */
  declare class ReactPDF$Page mixins React$Component<ReactPDF$PageProps> {}

  declare type ReactPDF$ViewProps = {
    /**
     * Enable/disable page wrapping for element.
     * @see https://react-pdf.org/components#page-wrapping
     */
    wrap?: boolean,
    debug?: boolean,
    render?: (props: {
      pageNumber: number,
      ...
    }) => React.Node,
    children?: React.Node,
    ...
  } & ReactPDF$NodeProps;

  /**
   * The most fundamental component for building a UI and is designed to be
   * nested inside other views and can have 0 to many children.
   */
  declare class ReactPDF$View mixins React$Component<ReactPDF$ViewProps> {}

  declare type ReactPDF$HTTPMethod =
    | "GET"
    | "HEAD"
    | "POST"
    | "PUT"
    | "DELETE"
    | "PATCH";

  declare type ReactPDF$SourceObject =
    | string
    | {
        data: Buffer,
        format: "png" | "jpg",
        ...
      }
    | {
        uri: string,
        method: ReactPDF$HTTPMethod,
        body: any,
        headers: any,
        ...
      };

  declare type ReactPDF$BaseImageProps = {
    debug?: boolean,
    cache?: boolean,
    safePath?: string,
    allowDangerousPaths?: boolean,
    ...
  } & ReactPDF$NodeProps;

  declare type ReactPDF$ImageWithSrcProp = {
    src: ReactPDF$SourceObject,
    ...
  } & ReactPDF$BaseImageProps;

  declare type ReactPDF$ImageWithSourceProp = {
    source: ReactPDF$SourceObject,
    ...
  } & ReactPDF$BaseImageProps;

  declare type ReactPDF$ImageProps =
    | ReactPDF$ImageWithSrcProp
    | ReactPDF$ImageWithSourceProp;

  /**
   * A React component for displaying network or local (Node only) JPG or
   * PNG images, as well as base64 encoded image strings.
   */
  declare class ReactPDF$Image mixins React$Component<ReactPDF$ImageProps> {}

  declare type ReactPDF$TextProps = {
    /**
     * Enable/disable page wrapping for element.
     * @see https://react-pdf.org/components#page-wrapping
     */
    wrap?: boolean,
    debug?: boolean,
    render?: (props: {
      pageNumber: number,
      totalPages: number,
      ...
    }) => React.Node,
    children?: React.Node,

    /**
     * How much hyphenated breaks should be avoided.
     */
    hyphenationCallback?: number,

    /**
     * Specifies the minimum number of lines in a text element that must be shown at the bottom of a page or its container.
     * @see https://react-pdf.org/advanced#orphan-&-widow-protection
     */
    orphans?: number,

    /**
     * Specifies the minimum number of lines in a text element that must be shown at the top of a page or its container..
     * @see https://react-pdf.org/advanced#orphan-&-widow-protection
     */
    widows?: number,
    ...
  } & ReactPDF$NodeProps;

  /**
   * A React component for displaying text. Text supports nesting of other
   * Text or Link components to create inline styling.
   */
  declare class ReactPDF$Text mixins React$Component<ReactPDF$TextProps> {}

  declare type ReactPDF$LinkProps = {
    /**
     * Enable/disable page wrapping for element.
     * @see https://react-pdf.org/components#page-wrapping
     */
    wrap?: boolean,
    debug?: boolean,
    src: string,
    children?: React.Node,
    ...
  } & ReactPDF$NodeProps;

  /**
   * A React component for displaying an hyperlink. Link’s can be nested
   * inside a Text component, or being inside any other valid primitive.
   */
  declare class ReactPDF$Link mixins React$Component<ReactPDF$LinkProps> {}

  declare type ReactPDF$NoteProps = {
    children: string,
    ...
  } & ReactPDF$NodeProps;

  declare class ReactPDF$Note mixins React$Component<ReactPDF$NoteProps> {}

  declare type ReactPDF$CanvasProps = {
    debug?: boolean,
    paint: (
      painter: any,
      availableWidth: number,
      availableHeight: number
    ) => null,
    ...
  } & ReactPDF$NodeProps;

  declare class ReactPDF$Canvas mixins React$Component<ReactPDF$CanvasProps> {}

  declare interface ReactPDF$BlobProviderParams {
    blob: Blob | null;
    url: string | null;
    loading: boolean;
    error: Error | null;
  }

  declare interface ReactPDF$BlobProviderProps {
    document: React.ReactElement<ReactPDF$DocumentProps>;
    children: (params: ReactPDF$BlobProviderParams) => React.Node;
  }

  /**
   * Easy and declarative way of getting document's blob data without
   * showing it on screen.
   * @see https://react-pdf.org/advanced#on-the-fly-rendering
   * @platform web
   */
  declare class ReactPDF$BlobProvider
    mixins React$Component<ReactPDF$BlobProviderProps> {}

  declare interface ReactPDF$PDFViewerProps {
    +width?: number | string;
    +height?: number | string;
    style?: ReactPDF$Style | ReactPDF$Style[];
    className?: string;
    children?: React.ReactElement<ReactPDF$DocumentProps>;
    innerRef?: React.Ref<HTMLIFrameElement>;
  }

  /**
   * Iframe PDF viewer for client-side generated documents.
   * @platform web
   */
  declare class ReactPDF$PDFViewer
    mixins React$Component<ReactPDF$PDFViewerProps> {}

  declare interface ReactPDF$PDFDownloadLinkProps {
    document: React.ReactElement<ReactPDF$DocumentProps>;
    fileName?: string;
    style?: ReactPDF$Style | ReactPDF$Style[];
    className?: string;
    children?:
      | React.Node
      | ((params: ReactPDF$BlobProviderParams) => React.Node);
  }

  /**
   * Anchor tag to enable generate and download PDF documents on the fly.
   * @see https://react-pdf.org/advanced#on-the-fly-rendering
   * @platform web
   */
  declare class ReactPDF$PDFDownloadLink
    mixins React$Component<ReactPDF$PDFDownloadLinkProps> {}

  declare type ReactPDF$FontStyle = "normal" | "italic" | "oblique";

  declare type ReactPDF$FontWeight =
    | number
    | "thin"
    | "ultralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "ultrabold"
    | "heavy";

  declare interface ReactPDF$FontSource {
    src: string;
    fontFamily: string;
    fontStyle: ReactPDF$FontStyle;
    fontWeight: number;
    data: any;
    loading: boolean;
    options: any;
  }

  declare interface ReactPDF$FontInstance {
    family: string;
    sources: ReactPDF$FontSource[];
  }

  declare interface ReactPDF$EmojiSource {
    url: string;
    format: string;
  }

  declare interface ReactPDF$FontDescriptor {
    family: string;
    fontStyle?: ReactPDF$FontStyle;
    fontWeight?: ReactPDF$FontWeight;
  }

  declare interface ReactPDF$RegisteredFont {
    src: string;
    loaded: boolean;
    loading: boolean;
    data: any;
    [key: string]: any;
  }

  declare type ReactPDF$HyphenationCallback = (
    words: string,
    glyphString: {
      [key: string]: any,
      ...
    }
  ) => string[];

  declare var ReactPDF$Font: {
    register: (
      options:
        | {
            family: string,
            src: string,
            [key: string]: any,
            ...
          }
        | {
            family: string,
            fonts: {
              src: string,
              fontStyle?: string,
              fontWeight?: string | number,
              [key: string]: any,
              ...
            }[],
            ...
          }
    ) => void,
    getEmojiSource: () => ReactPDF$EmojiSource,
    getRegisteredFonts: () => ReactPDF$FontInstance[],
    getRegisteredFontFamilies: () => string[],
    registerEmojiSource: (emojiSource: ReactPDF$EmojiSource) => void,
    registerHyphenationCallback: (
      hyphenationCallback: ReactPDF$HyphenationCallback
    ) => void,
    getHyphenationCallback: () => ReactPDF$HyphenationCallback,
    getFont: (
      fontDescriptor: ReactPDF$FontDescriptor
    ) => ReactPDF$RegisteredFont | void,
    load: (
      fontDescriptor: ReactPDF$FontDescriptor,
      document: React.ReactElement<ReactPDF$DocumentProps>
    ) => Promise<void>,
    clear: () => void,
    reset: () => void,
    ...
  };

  declare var ReactPDF$StyleSheet: {
    hairlineWidth: number,
    // declare function defineMessages<
    //   T: { [key: string]: $Exact<$npm$ReactIntl$MessageDescriptor>, ... }
    // >(
    //   messageDescriptors: T
    // ): T;
    create: <T: { [key: string]: $Exact<ReactPDF$Style>, ... }>(styles: T) => T,
    resolve: (
      style: ReactPDF$Style,
      container: {
        width: number,
        height: number,
        orientation: ReactPDF$Orientation,
        ...
      }
    ) => ReactPDF$Style,
    flatten: (
      ...style: (ReactPDF$Style[] | ReactPDF$Style | void)[]
    ) => ReactPDF$Style,
    absoluteFillObject: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      ...
    },
    ...
  };

  declare var ReactPDF$version: any;

  declare var ReactPDF$PDFRenderer: any;

  declare var ReactPDF$createInstance: (
    element: {
      type: string,
      props: {
        [key: string]: any,
        ...
      },
      ...
    },
    root?: any
  ) => any;

  declare var ReactPDF$pdf: (
    document: any,
  ) => {
    container: any,
    isDirty: () => boolean,
    updateContainer: (document: React.ReactElement<any>) => void,
    toBuffer: () => Promise<NodeJS$ReadableStream>,
    toBlob: () => Promise<Blob>,
    toString: () => string,
    ...
  };

  declare var ReactPDF$renderToStream: (
    document: React.ReactElement<ReactPDF$DocumentProps>
  ) => Promise<NodeJS$ReadableStream>;

  declare var ReactPDF$renderToFile: (
    document: React.ReactElement<ReactPDF$DocumentProps>,
    filePath: string,
    callback?: (output: NodeJS$ReadableStream, filePath: string) => any
  ) => Promise<NodeJS$ReadableStream>;

  declare var ReactPDF$render: typeof ReactPDF$renderToFile;
  declare var Document: typeof ReactPDF$Document;
  declare var Page: typeof ReactPDF$Page;
  declare var View: typeof ReactPDF$View;
  declare var Image: typeof ReactPDF$Image;
  declare var Text: typeof ReactPDF$Text;
  declare var Canvas: typeof ReactPDF$Canvas;
  declare var Link: typeof ReactPDF$Link;
  declare var Note: typeof ReactPDF$Note;
  declare var Font: typeof ReactPDF$Font;
  declare var StyleSheet: typeof ReactPDF$StyleSheet;
  declare var createInstance: typeof ReactPDF$createInstance;
  declare var PDFRenderer: typeof ReactPDF$PDFRenderer;
  declare var version: typeof ReactPDF$version;
  declare var pdf: typeof ReactPDF$pdf;
  declare var PDFViewer: typeof ReactPDF$PDFViewer;
  declare var BlobProvider: typeof ReactPDF$BlobProvider;
  declare var PDFDownloadLink: typeof ReactPDF$PDFDownloadLink;
  declare export default typeof ReactPDF;
  declare var Svg: $FlowFixMe;
  declare var Path: $FlowFixMe;
  declare var Circle: $FlowFixMe;

  declare export {
    Document,
    Page,
    View,
    Image,
    Text,
    Canvas,
    Link,
    Note,
    Font,
    StyleSheet,
    createInstance,
    PDFRenderer,
    version,
    pdf,
    PDFViewer,
    BlobProvider,
    PDFDownloadLink,
    Svg,
    Path,
    Circle,
  };
}
