export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildMarkdownRemarkChildGrvscCodeBlockAdditionalThemes = 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes',
  ChildMarkdownRemarkChildGrvscCodeBlockAdditionalThemesConditions = 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___conditions',
  ChildMarkdownRemarkChildGrvscCodeBlockAdditionalThemesIdentifier = 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___identifier',
  ChildMarkdownRemarkChildGrvscCodeBlockAdditionalThemesPath = 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___path',
  ChildMarkdownRemarkChildGrvscCodeBlockChildren = 'childMarkdownRemark___childGrvscCodeBlock___children',
  ChildMarkdownRemarkChildGrvscCodeBlockChildrenChildren = 'childMarkdownRemark___childGrvscCodeBlock___children___children',
  ChildMarkdownRemarkChildGrvscCodeBlockChildrenId = 'childMarkdownRemark___childGrvscCodeBlock___children___id',
  ChildMarkdownRemarkChildGrvscCodeBlockCodeClassName = 'childMarkdownRemark___childGrvscCodeBlock___codeClassName',
  ChildMarkdownRemarkChildGrvscCodeBlockDefaultThemeConditions = 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___conditions',
  ChildMarkdownRemarkChildGrvscCodeBlockDefaultThemeIdentifier = 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___identifier',
  ChildMarkdownRemarkChildGrvscCodeBlockDefaultThemePath = 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___path',
  ChildMarkdownRemarkChildGrvscCodeBlockHtml = 'childMarkdownRemark___childGrvscCodeBlock___html',
  ChildMarkdownRemarkChildGrvscCodeBlockId = 'childMarkdownRemark___childGrvscCodeBlock___id',
  ChildMarkdownRemarkChildGrvscCodeBlockIndex = 'childMarkdownRemark___childGrvscCodeBlock___index',
  ChildMarkdownRemarkChildGrvscCodeBlockInternalContent = 'childMarkdownRemark___childGrvscCodeBlock___internal___content',
  ChildMarkdownRemarkChildGrvscCodeBlockInternalContentDigest = 'childMarkdownRemark___childGrvscCodeBlock___internal___contentDigest',
  ChildMarkdownRemarkChildGrvscCodeBlockInternalDescription = 'childMarkdownRemark___childGrvscCodeBlock___internal___description',
  ChildMarkdownRemarkChildGrvscCodeBlockInternalFieldOwners = 'childMarkdownRemark___childGrvscCodeBlock___internal___fieldOwners',
  ChildMarkdownRemarkChildGrvscCodeBlockInternalIgnoreType = 'childMarkdownRemark___childGrvscCodeBlock___internal___ignoreType',
  ChildMarkdownRemarkChildGrvscCodeBlockInternalMediaType = 'childMarkdownRemark___childGrvscCodeBlock___internal___mediaType',
  ChildMarkdownRemarkChildGrvscCodeBlockInternalOwner = 'childMarkdownRemark___childGrvscCodeBlock___internal___owner',
  ChildMarkdownRemarkChildGrvscCodeBlockInternalType = 'childMarkdownRemark___childGrvscCodeBlock___internal___type',
  ChildMarkdownRemarkChildGrvscCodeBlockLanguage = 'childMarkdownRemark___childGrvscCodeBlock___language',
  ChildMarkdownRemarkChildGrvscCodeBlockMeta = 'childMarkdownRemark___childGrvscCodeBlock___meta',
  ChildMarkdownRemarkChildGrvscCodeBlockParentChildren = 'childMarkdownRemark___childGrvscCodeBlock___parent___children',
  ChildMarkdownRemarkChildGrvscCodeBlockParentId = 'childMarkdownRemark___childGrvscCodeBlock___parent___id',
  ChildMarkdownRemarkChildGrvscCodeBlockPreClassName = 'childMarkdownRemark___childGrvscCodeBlock___preClassName',
  ChildMarkdownRemarkChildGrvscCodeBlockText = 'childMarkdownRemark___childGrvscCodeBlock___text',
  ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLines = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines',
  ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesAttrs = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___attrs',
  ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesClassName = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___className',
  ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesData = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___data',
  ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesDiff = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___diff',
  ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesGutterCells = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___gutterCells',
  ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesHtml = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___html',
  ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesIsHighlighted = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___isHighlighted',
  ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesLineNumber = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___lineNumber',
  ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesText = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___text',
  ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesTokens = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___tokens',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenGrvscCodeBlock = 'childMarkdownRemark___childrenGrvscCodeBlock',
  ChildMarkdownRemarkChildrenGrvscCodeBlockAdditionalThemes = 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes',
  ChildMarkdownRemarkChildrenGrvscCodeBlockAdditionalThemesConditions = 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___conditions',
  ChildMarkdownRemarkChildrenGrvscCodeBlockAdditionalThemesIdentifier = 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___identifier',
  ChildMarkdownRemarkChildrenGrvscCodeBlockAdditionalThemesPath = 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___path',
  ChildMarkdownRemarkChildrenGrvscCodeBlockChildren = 'childMarkdownRemark___childrenGrvscCodeBlock___children',
  ChildMarkdownRemarkChildrenGrvscCodeBlockChildrenChildren = 'childMarkdownRemark___childrenGrvscCodeBlock___children___children',
  ChildMarkdownRemarkChildrenGrvscCodeBlockChildrenId = 'childMarkdownRemark___childrenGrvscCodeBlock___children___id',
  ChildMarkdownRemarkChildrenGrvscCodeBlockCodeClassName = 'childMarkdownRemark___childrenGrvscCodeBlock___codeClassName',
  ChildMarkdownRemarkChildrenGrvscCodeBlockDefaultThemeConditions = 'childMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___conditions',
  ChildMarkdownRemarkChildrenGrvscCodeBlockDefaultThemeIdentifier = 'childMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___identifier',
  ChildMarkdownRemarkChildrenGrvscCodeBlockDefaultThemePath = 'childMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___path',
  ChildMarkdownRemarkChildrenGrvscCodeBlockHtml = 'childMarkdownRemark___childrenGrvscCodeBlock___html',
  ChildMarkdownRemarkChildrenGrvscCodeBlockId = 'childMarkdownRemark___childrenGrvscCodeBlock___id',
  ChildMarkdownRemarkChildrenGrvscCodeBlockIndex = 'childMarkdownRemark___childrenGrvscCodeBlock___index',
  ChildMarkdownRemarkChildrenGrvscCodeBlockInternalContent = 'childMarkdownRemark___childrenGrvscCodeBlock___internal___content',
  ChildMarkdownRemarkChildrenGrvscCodeBlockInternalContentDigest = 'childMarkdownRemark___childrenGrvscCodeBlock___internal___contentDigest',
  ChildMarkdownRemarkChildrenGrvscCodeBlockInternalDescription = 'childMarkdownRemark___childrenGrvscCodeBlock___internal___description',
  ChildMarkdownRemarkChildrenGrvscCodeBlockInternalFieldOwners = 'childMarkdownRemark___childrenGrvscCodeBlock___internal___fieldOwners',
  ChildMarkdownRemarkChildrenGrvscCodeBlockInternalIgnoreType = 'childMarkdownRemark___childrenGrvscCodeBlock___internal___ignoreType',
  ChildMarkdownRemarkChildrenGrvscCodeBlockInternalMediaType = 'childMarkdownRemark___childrenGrvscCodeBlock___internal___mediaType',
  ChildMarkdownRemarkChildrenGrvscCodeBlockInternalOwner = 'childMarkdownRemark___childrenGrvscCodeBlock___internal___owner',
  ChildMarkdownRemarkChildrenGrvscCodeBlockInternalType = 'childMarkdownRemark___childrenGrvscCodeBlock___internal___type',
  ChildMarkdownRemarkChildrenGrvscCodeBlockLanguage = 'childMarkdownRemark___childrenGrvscCodeBlock___language',
  ChildMarkdownRemarkChildrenGrvscCodeBlockMeta = 'childMarkdownRemark___childrenGrvscCodeBlock___meta',
  ChildMarkdownRemarkChildrenGrvscCodeBlockParentChildren = 'childMarkdownRemark___childrenGrvscCodeBlock___parent___children',
  ChildMarkdownRemarkChildrenGrvscCodeBlockParentId = 'childMarkdownRemark___childrenGrvscCodeBlock___parent___id',
  ChildMarkdownRemarkChildrenGrvscCodeBlockPreClassName = 'childMarkdownRemark___childrenGrvscCodeBlock___preClassName',
  ChildMarkdownRemarkChildrenGrvscCodeBlockText = 'childMarkdownRemark___childrenGrvscCodeBlock___text',
  ChildMarkdownRemarkChildrenGrvscCodeBlockTokenizedLines = 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines',
  ChildMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesAttrs = 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___attrs',
  ChildMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesClassName = 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___className',
  ChildMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesData = 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___data',
  ChildMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesDiff = 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___diff',
  ChildMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesGutterCells = 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___gutterCells',
  ChildMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesHtml = 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___html',
  ChildMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesIsHighlighted = 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___isHighlighted',
  ChildMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesLineNumber = 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___lineNumber',
  ChildMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesText = 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___text',
  ChildMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesTokens = 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___tokens',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFrontmatterAlt = 'childMarkdownRemark___frontmatter___alt',
  ChildMarkdownRemarkFrontmatterCategory = 'childMarkdownRemark___frontmatter___category',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterDesc = 'childMarkdownRemark___frontmatter___desc',
  ChildMarkdownRemarkFrontmatterThumbnailAbsolutePath = 'childMarkdownRemark___frontmatter___thumbnail___absolutePath',
  ChildMarkdownRemarkFrontmatterThumbnailAccessTime = 'childMarkdownRemark___frontmatter___thumbnail___accessTime',
  ChildMarkdownRemarkFrontmatterThumbnailAtime = 'childMarkdownRemark___frontmatter___thumbnail___atime',
  ChildMarkdownRemarkFrontmatterThumbnailAtimeMs = 'childMarkdownRemark___frontmatter___thumbnail___atimeMs',
  ChildMarkdownRemarkFrontmatterThumbnailBase = 'childMarkdownRemark___frontmatter___thumbnail___base',
  ChildMarkdownRemarkFrontmatterThumbnailBirthTime = 'childMarkdownRemark___frontmatter___thumbnail___birthTime',
  ChildMarkdownRemarkFrontmatterThumbnailBirthtime = 'childMarkdownRemark___frontmatter___thumbnail___birthtime',
  ChildMarkdownRemarkFrontmatterThumbnailBirthtimeMs = 'childMarkdownRemark___frontmatter___thumbnail___birthtimeMs',
  ChildMarkdownRemarkFrontmatterThumbnailBlksize = 'childMarkdownRemark___frontmatter___thumbnail___blksize',
  ChildMarkdownRemarkFrontmatterThumbnailBlocks = 'childMarkdownRemark___frontmatter___thumbnail___blocks',
  ChildMarkdownRemarkFrontmatterThumbnailChangeTime = 'childMarkdownRemark___frontmatter___thumbnail___changeTime',
  ChildMarkdownRemarkFrontmatterThumbnailChildren = 'childMarkdownRemark___frontmatter___thumbnail___children',
  ChildMarkdownRemarkFrontmatterThumbnailChildrenImageSharp = 'childMarkdownRemark___frontmatter___thumbnail___childrenImageSharp',
  ChildMarkdownRemarkFrontmatterThumbnailChildrenMarkdownRemark = 'childMarkdownRemark___frontmatter___thumbnail___childrenMarkdownRemark',
  ChildMarkdownRemarkFrontmatterThumbnailCtime = 'childMarkdownRemark___frontmatter___thumbnail___ctime',
  ChildMarkdownRemarkFrontmatterThumbnailCtimeMs = 'childMarkdownRemark___frontmatter___thumbnail___ctimeMs',
  ChildMarkdownRemarkFrontmatterThumbnailDev = 'childMarkdownRemark___frontmatter___thumbnail___dev',
  ChildMarkdownRemarkFrontmatterThumbnailDir = 'childMarkdownRemark___frontmatter___thumbnail___dir',
  ChildMarkdownRemarkFrontmatterThumbnailExt = 'childMarkdownRemark___frontmatter___thumbnail___ext',
  ChildMarkdownRemarkFrontmatterThumbnailExtension = 'childMarkdownRemark___frontmatter___thumbnail___extension',
  ChildMarkdownRemarkFrontmatterThumbnailGid = 'childMarkdownRemark___frontmatter___thumbnail___gid',
  ChildMarkdownRemarkFrontmatterThumbnailId = 'childMarkdownRemark___frontmatter___thumbnail___id',
  ChildMarkdownRemarkFrontmatterThumbnailIno = 'childMarkdownRemark___frontmatter___thumbnail___ino',
  ChildMarkdownRemarkFrontmatterThumbnailMode = 'childMarkdownRemark___frontmatter___thumbnail___mode',
  ChildMarkdownRemarkFrontmatterThumbnailModifiedTime = 'childMarkdownRemark___frontmatter___thumbnail___modifiedTime',
  ChildMarkdownRemarkFrontmatterThumbnailMtime = 'childMarkdownRemark___frontmatter___thumbnail___mtime',
  ChildMarkdownRemarkFrontmatterThumbnailMtimeMs = 'childMarkdownRemark___frontmatter___thumbnail___mtimeMs',
  ChildMarkdownRemarkFrontmatterThumbnailName = 'childMarkdownRemark___frontmatter___thumbnail___name',
  ChildMarkdownRemarkFrontmatterThumbnailNlink = 'childMarkdownRemark___frontmatter___thumbnail___nlink',
  ChildMarkdownRemarkFrontmatterThumbnailPrettySize = 'childMarkdownRemark___frontmatter___thumbnail___prettySize',
  ChildMarkdownRemarkFrontmatterThumbnailPublicUrl = 'childMarkdownRemark___frontmatter___thumbnail___publicURL',
  ChildMarkdownRemarkFrontmatterThumbnailRdev = 'childMarkdownRemark___frontmatter___thumbnail___rdev',
  ChildMarkdownRemarkFrontmatterThumbnailRelativeDirectory = 'childMarkdownRemark___frontmatter___thumbnail___relativeDirectory',
  ChildMarkdownRemarkFrontmatterThumbnailRelativePath = 'childMarkdownRemark___frontmatter___thumbnail___relativePath',
  ChildMarkdownRemarkFrontmatterThumbnailRoot = 'childMarkdownRemark___frontmatter___thumbnail___root',
  ChildMarkdownRemarkFrontmatterThumbnailSize = 'childMarkdownRemark___frontmatter___thumbnail___size',
  ChildMarkdownRemarkFrontmatterThumbnailSourceInstanceName = 'childMarkdownRemark___frontmatter___thumbnail___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterThumbnailUid = 'childMarkdownRemark___frontmatter___thumbnail___uid',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  Children = 'children',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  ChildrenMarkdownRemarkChildGrvscCodeBlockAdditionalThemes = 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes',
  ChildrenMarkdownRemarkChildGrvscCodeBlockAdditionalThemesConditions = 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes___conditions',
  ChildrenMarkdownRemarkChildGrvscCodeBlockAdditionalThemesIdentifier = 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes___identifier',
  ChildrenMarkdownRemarkChildGrvscCodeBlockAdditionalThemesPath = 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes___path',
  ChildrenMarkdownRemarkChildGrvscCodeBlockChildren = 'childrenMarkdownRemark___childGrvscCodeBlock___children',
  ChildrenMarkdownRemarkChildGrvscCodeBlockChildrenChildren = 'childrenMarkdownRemark___childGrvscCodeBlock___children___children',
  ChildrenMarkdownRemarkChildGrvscCodeBlockChildrenId = 'childrenMarkdownRemark___childGrvscCodeBlock___children___id',
  ChildrenMarkdownRemarkChildGrvscCodeBlockCodeClassName = 'childrenMarkdownRemark___childGrvscCodeBlock___codeClassName',
  ChildrenMarkdownRemarkChildGrvscCodeBlockDefaultThemeConditions = 'childrenMarkdownRemark___childGrvscCodeBlock___defaultTheme___conditions',
  ChildrenMarkdownRemarkChildGrvscCodeBlockDefaultThemeIdentifier = 'childrenMarkdownRemark___childGrvscCodeBlock___defaultTheme___identifier',
  ChildrenMarkdownRemarkChildGrvscCodeBlockDefaultThemePath = 'childrenMarkdownRemark___childGrvscCodeBlock___defaultTheme___path',
  ChildrenMarkdownRemarkChildGrvscCodeBlockHtml = 'childrenMarkdownRemark___childGrvscCodeBlock___html',
  ChildrenMarkdownRemarkChildGrvscCodeBlockId = 'childrenMarkdownRemark___childGrvscCodeBlock___id',
  ChildrenMarkdownRemarkChildGrvscCodeBlockIndex = 'childrenMarkdownRemark___childGrvscCodeBlock___index',
  ChildrenMarkdownRemarkChildGrvscCodeBlockInternalContent = 'childrenMarkdownRemark___childGrvscCodeBlock___internal___content',
  ChildrenMarkdownRemarkChildGrvscCodeBlockInternalContentDigest = 'childrenMarkdownRemark___childGrvscCodeBlock___internal___contentDigest',
  ChildrenMarkdownRemarkChildGrvscCodeBlockInternalDescription = 'childrenMarkdownRemark___childGrvscCodeBlock___internal___description',
  ChildrenMarkdownRemarkChildGrvscCodeBlockInternalFieldOwners = 'childrenMarkdownRemark___childGrvscCodeBlock___internal___fieldOwners',
  ChildrenMarkdownRemarkChildGrvscCodeBlockInternalIgnoreType = 'childrenMarkdownRemark___childGrvscCodeBlock___internal___ignoreType',
  ChildrenMarkdownRemarkChildGrvscCodeBlockInternalMediaType = 'childrenMarkdownRemark___childGrvscCodeBlock___internal___mediaType',
  ChildrenMarkdownRemarkChildGrvscCodeBlockInternalOwner = 'childrenMarkdownRemark___childGrvscCodeBlock___internal___owner',
  ChildrenMarkdownRemarkChildGrvscCodeBlockInternalType = 'childrenMarkdownRemark___childGrvscCodeBlock___internal___type',
  ChildrenMarkdownRemarkChildGrvscCodeBlockLanguage = 'childrenMarkdownRemark___childGrvscCodeBlock___language',
  ChildrenMarkdownRemarkChildGrvscCodeBlockMeta = 'childrenMarkdownRemark___childGrvscCodeBlock___meta',
  ChildrenMarkdownRemarkChildGrvscCodeBlockParentChildren = 'childrenMarkdownRemark___childGrvscCodeBlock___parent___children',
  ChildrenMarkdownRemarkChildGrvscCodeBlockParentId = 'childrenMarkdownRemark___childGrvscCodeBlock___parent___id',
  ChildrenMarkdownRemarkChildGrvscCodeBlockPreClassName = 'childrenMarkdownRemark___childGrvscCodeBlock___preClassName',
  ChildrenMarkdownRemarkChildGrvscCodeBlockText = 'childrenMarkdownRemark___childGrvscCodeBlock___text',
  ChildrenMarkdownRemarkChildGrvscCodeBlockTokenizedLines = 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines',
  ChildrenMarkdownRemarkChildGrvscCodeBlockTokenizedLinesAttrs = 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___attrs',
  ChildrenMarkdownRemarkChildGrvscCodeBlockTokenizedLinesClassName = 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___className',
  ChildrenMarkdownRemarkChildGrvscCodeBlockTokenizedLinesData = 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___data',
  ChildrenMarkdownRemarkChildGrvscCodeBlockTokenizedLinesDiff = 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___diff',
  ChildrenMarkdownRemarkChildGrvscCodeBlockTokenizedLinesGutterCells = 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___gutterCells',
  ChildrenMarkdownRemarkChildGrvscCodeBlockTokenizedLinesHtml = 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___html',
  ChildrenMarkdownRemarkChildGrvscCodeBlockTokenizedLinesIsHighlighted = 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___isHighlighted',
  ChildrenMarkdownRemarkChildGrvscCodeBlockTokenizedLinesLineNumber = 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___lineNumber',
  ChildrenMarkdownRemarkChildGrvscCodeBlockTokenizedLinesText = 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___text',
  ChildrenMarkdownRemarkChildGrvscCodeBlockTokenizedLinesTokens = 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___tokens',
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlock = 'childrenMarkdownRemark___childrenGrvscCodeBlock',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockAdditionalThemes = 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockAdditionalThemesConditions = 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___conditions',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockAdditionalThemesIdentifier = 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___identifier',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockAdditionalThemesPath = 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___path',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockChildren = 'childrenMarkdownRemark___childrenGrvscCodeBlock___children',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockChildrenChildren = 'childrenMarkdownRemark___childrenGrvscCodeBlock___children___children',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockChildrenId = 'childrenMarkdownRemark___childrenGrvscCodeBlock___children___id',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockCodeClassName = 'childrenMarkdownRemark___childrenGrvscCodeBlock___codeClassName',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockDefaultThemeConditions = 'childrenMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___conditions',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockDefaultThemeIdentifier = 'childrenMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___identifier',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockDefaultThemePath = 'childrenMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___path',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockHtml = 'childrenMarkdownRemark___childrenGrvscCodeBlock___html',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockId = 'childrenMarkdownRemark___childrenGrvscCodeBlock___id',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockIndex = 'childrenMarkdownRemark___childrenGrvscCodeBlock___index',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockInternalContent = 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___content',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockInternalContentDigest = 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___contentDigest',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockInternalDescription = 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___description',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockInternalFieldOwners = 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___fieldOwners',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockInternalIgnoreType = 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___ignoreType',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockInternalMediaType = 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___mediaType',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockInternalOwner = 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___owner',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockInternalType = 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___type',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockLanguage = 'childrenMarkdownRemark___childrenGrvscCodeBlock___language',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockMeta = 'childrenMarkdownRemark___childrenGrvscCodeBlock___meta',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockParentChildren = 'childrenMarkdownRemark___childrenGrvscCodeBlock___parent___children',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockParentId = 'childrenMarkdownRemark___childrenGrvscCodeBlock___parent___id',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockPreClassName = 'childrenMarkdownRemark___childrenGrvscCodeBlock___preClassName',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockText = 'childrenMarkdownRemark___childrenGrvscCodeBlock___text',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockTokenizedLines = 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesAttrs = 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___attrs',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesClassName = 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___className',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesData = 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___data',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesDiff = 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___diff',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesGutterCells = 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___gutterCells',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesHtml = 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___html',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesIsHighlighted = 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___isHighlighted',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesLineNumber = 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___lineNumber',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesText = 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___text',
  ChildrenMarkdownRemarkChildrenGrvscCodeBlockTokenizedLinesTokens = 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___tokens',
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkFieldsSlug = 'childrenMarkdownRemark___fields___slug',
  ChildrenMarkdownRemarkFileAbsolutePath = 'childrenMarkdownRemark___fileAbsolutePath',
  ChildrenMarkdownRemarkFrontmatterAlt = 'childrenMarkdownRemark___frontmatter___alt',
  ChildrenMarkdownRemarkFrontmatterCategory = 'childrenMarkdownRemark___frontmatter___category',
  ChildrenMarkdownRemarkFrontmatterDate = 'childrenMarkdownRemark___frontmatter___date',
  ChildrenMarkdownRemarkFrontmatterDesc = 'childrenMarkdownRemark___frontmatter___desc',
  ChildrenMarkdownRemarkFrontmatterThumbnailAbsolutePath = 'childrenMarkdownRemark___frontmatter___thumbnail___absolutePath',
  ChildrenMarkdownRemarkFrontmatterThumbnailAccessTime = 'childrenMarkdownRemark___frontmatter___thumbnail___accessTime',
  ChildrenMarkdownRemarkFrontmatterThumbnailAtime = 'childrenMarkdownRemark___frontmatter___thumbnail___atime',
  ChildrenMarkdownRemarkFrontmatterThumbnailAtimeMs = 'childrenMarkdownRemark___frontmatter___thumbnail___atimeMs',
  ChildrenMarkdownRemarkFrontmatterThumbnailBase = 'childrenMarkdownRemark___frontmatter___thumbnail___base',
  ChildrenMarkdownRemarkFrontmatterThumbnailBirthTime = 'childrenMarkdownRemark___frontmatter___thumbnail___birthTime',
  ChildrenMarkdownRemarkFrontmatterThumbnailBirthtime = 'childrenMarkdownRemark___frontmatter___thumbnail___birthtime',
  ChildrenMarkdownRemarkFrontmatterThumbnailBirthtimeMs = 'childrenMarkdownRemark___frontmatter___thumbnail___birthtimeMs',
  ChildrenMarkdownRemarkFrontmatterThumbnailBlksize = 'childrenMarkdownRemark___frontmatter___thumbnail___blksize',
  ChildrenMarkdownRemarkFrontmatterThumbnailBlocks = 'childrenMarkdownRemark___frontmatter___thumbnail___blocks',
  ChildrenMarkdownRemarkFrontmatterThumbnailChangeTime = 'childrenMarkdownRemark___frontmatter___thumbnail___changeTime',
  ChildrenMarkdownRemarkFrontmatterThumbnailChildren = 'childrenMarkdownRemark___frontmatter___thumbnail___children',
  ChildrenMarkdownRemarkFrontmatterThumbnailChildrenImageSharp = 'childrenMarkdownRemark___frontmatter___thumbnail___childrenImageSharp',
  ChildrenMarkdownRemarkFrontmatterThumbnailChildrenMarkdownRemark = 'childrenMarkdownRemark___frontmatter___thumbnail___childrenMarkdownRemark',
  ChildrenMarkdownRemarkFrontmatterThumbnailCtime = 'childrenMarkdownRemark___frontmatter___thumbnail___ctime',
  ChildrenMarkdownRemarkFrontmatterThumbnailCtimeMs = 'childrenMarkdownRemark___frontmatter___thumbnail___ctimeMs',
  ChildrenMarkdownRemarkFrontmatterThumbnailDev = 'childrenMarkdownRemark___frontmatter___thumbnail___dev',
  ChildrenMarkdownRemarkFrontmatterThumbnailDir = 'childrenMarkdownRemark___frontmatter___thumbnail___dir',
  ChildrenMarkdownRemarkFrontmatterThumbnailExt = 'childrenMarkdownRemark___frontmatter___thumbnail___ext',
  ChildrenMarkdownRemarkFrontmatterThumbnailExtension = 'childrenMarkdownRemark___frontmatter___thumbnail___extension',
  ChildrenMarkdownRemarkFrontmatterThumbnailGid = 'childrenMarkdownRemark___frontmatter___thumbnail___gid',
  ChildrenMarkdownRemarkFrontmatterThumbnailId = 'childrenMarkdownRemark___frontmatter___thumbnail___id',
  ChildrenMarkdownRemarkFrontmatterThumbnailIno = 'childrenMarkdownRemark___frontmatter___thumbnail___ino',
  ChildrenMarkdownRemarkFrontmatterThumbnailMode = 'childrenMarkdownRemark___frontmatter___thumbnail___mode',
  ChildrenMarkdownRemarkFrontmatterThumbnailModifiedTime = 'childrenMarkdownRemark___frontmatter___thumbnail___modifiedTime',
  ChildrenMarkdownRemarkFrontmatterThumbnailMtime = 'childrenMarkdownRemark___frontmatter___thumbnail___mtime',
  ChildrenMarkdownRemarkFrontmatterThumbnailMtimeMs = 'childrenMarkdownRemark___frontmatter___thumbnail___mtimeMs',
  ChildrenMarkdownRemarkFrontmatterThumbnailName = 'childrenMarkdownRemark___frontmatter___thumbnail___name',
  ChildrenMarkdownRemarkFrontmatterThumbnailNlink = 'childrenMarkdownRemark___frontmatter___thumbnail___nlink',
  ChildrenMarkdownRemarkFrontmatterThumbnailPrettySize = 'childrenMarkdownRemark___frontmatter___thumbnail___prettySize',
  ChildrenMarkdownRemarkFrontmatterThumbnailPublicUrl = 'childrenMarkdownRemark___frontmatter___thumbnail___publicURL',
  ChildrenMarkdownRemarkFrontmatterThumbnailRdev = 'childrenMarkdownRemark___frontmatter___thumbnail___rdev',
  ChildrenMarkdownRemarkFrontmatterThumbnailRelativeDirectory = 'childrenMarkdownRemark___frontmatter___thumbnail___relativeDirectory',
  ChildrenMarkdownRemarkFrontmatterThumbnailRelativePath = 'childrenMarkdownRemark___frontmatter___thumbnail___relativePath',
  ChildrenMarkdownRemarkFrontmatterThumbnailRoot = 'childrenMarkdownRemark___frontmatter___thumbnail___root',
  ChildrenMarkdownRemarkFrontmatterThumbnailSize = 'childrenMarkdownRemark___frontmatter___thumbnail___size',
  ChildrenMarkdownRemarkFrontmatterThumbnailSourceInstanceName = 'childrenMarkdownRemark___frontmatter___thumbnail___sourceInstanceName',
  ChildrenMarkdownRemarkFrontmatterThumbnailUid = 'childrenMarkdownRemark___frontmatter___thumbnail___uid',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  PublicUrl = 'publicURL',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type GrvscCodeBlock = Node & {
  __typename?: 'GRVSCCodeBlock';
  additionalThemes: Array<GrvscTheme>;
  children: Array<Node>;
  codeClassName: Scalars['String'];
  defaultTheme: GrvscTheme;
  html: Scalars['String'];
  id: Scalars['ID'];
  index: Scalars['Int'];
  internal: Internal;
  language?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  preClassName: Scalars['String'];
  text: Scalars['String'];
  tokenizedLines?: Maybe<Array<GrvscTokenizedLine>>;
};

export type GrvscCodeBlockConnection = {
  __typename?: 'GRVSCCodeBlockConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GrvscCodeBlockEdge>;
  group: Array<GrvscCodeBlockGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GrvscCodeBlock>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GrvscCodeBlockConnectionDistinctArgs = {
  field: GrvscCodeBlockFieldsEnum;
};


export type GrvscCodeBlockConnectionGroupArgs = {
  field: GrvscCodeBlockFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GrvscCodeBlockConnectionMaxArgs = {
  field: GrvscCodeBlockFieldsEnum;
};


export type GrvscCodeBlockConnectionMinArgs = {
  field: GrvscCodeBlockFieldsEnum;
};


export type GrvscCodeBlockConnectionSumArgs = {
  field: GrvscCodeBlockFieldsEnum;
};

export type GrvscCodeBlockEdge = {
  __typename?: 'GRVSCCodeBlockEdge';
  next?: Maybe<GrvscCodeBlock>;
  node: GrvscCodeBlock;
  previous?: Maybe<GrvscCodeBlock>;
};

export enum GrvscCodeBlockFieldsEnum {
  AdditionalThemes = 'additionalThemes',
  AdditionalThemesConditions = 'additionalThemes___conditions',
  AdditionalThemesConditionsCondition = 'additionalThemes___conditions___condition',
  AdditionalThemesConditionsValue = 'additionalThemes___conditions___value',
  AdditionalThemesIdentifier = 'additionalThemes___identifier',
  AdditionalThemesPath = 'additionalThemes___path',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CodeClassName = 'codeClassName',
  DefaultThemeConditions = 'defaultTheme___conditions',
  DefaultThemeConditionsCondition = 'defaultTheme___conditions___condition',
  DefaultThemeConditionsValue = 'defaultTheme___conditions___value',
  DefaultThemeIdentifier = 'defaultTheme___identifier',
  DefaultThemePath = 'defaultTheme___path',
  Html = 'html',
  Id = 'id',
  Index = 'index',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Language = 'language',
  Meta = 'meta',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PreClassName = 'preClassName',
  Text = 'text',
  TokenizedLines = 'tokenizedLines',
  TokenizedLinesAttrs = 'tokenizedLines___attrs',
  TokenizedLinesClassName = 'tokenizedLines___className',
  TokenizedLinesData = 'tokenizedLines___data',
  TokenizedLinesDiff = 'tokenizedLines___diff',
  TokenizedLinesGutterCells = 'tokenizedLines___gutterCells',
  TokenizedLinesGutterCellsClassName = 'tokenizedLines___gutterCells___className',
  TokenizedLinesGutterCellsText = 'tokenizedLines___gutterCells___text',
  TokenizedLinesHtml = 'tokenizedLines___html',
  TokenizedLinesIsHighlighted = 'tokenizedLines___isHighlighted',
  TokenizedLinesLineNumber = 'tokenizedLines___lineNumber',
  TokenizedLinesText = 'tokenizedLines___text',
  TokenizedLinesTokens = 'tokenizedLines___tokens',
  TokenizedLinesTokensAdditionalThemeTokenData = 'tokenizedLines___tokens___additionalThemeTokenData',
  TokenizedLinesTokensAdditionalThemeTokenDataBold = 'tokenizedLines___tokens___additionalThemeTokenData___bold',
  TokenizedLinesTokensAdditionalThemeTokenDataClassName = 'tokenizedLines___tokens___additionalThemeTokenData___className',
  TokenizedLinesTokensAdditionalThemeTokenDataColor = 'tokenizedLines___tokens___additionalThemeTokenData___color',
  TokenizedLinesTokensAdditionalThemeTokenDataItalic = 'tokenizedLines___tokens___additionalThemeTokenData___italic',
  TokenizedLinesTokensAdditionalThemeTokenDataMeta = 'tokenizedLines___tokens___additionalThemeTokenData___meta',
  TokenizedLinesTokensAdditionalThemeTokenDataThemeIdentifier = 'tokenizedLines___tokens___additionalThemeTokenData___themeIdentifier',
  TokenizedLinesTokensAdditionalThemeTokenDataUnderline = 'tokenizedLines___tokens___additionalThemeTokenData___underline',
  TokenizedLinesTokensClassName = 'tokenizedLines___tokens___className',
  TokenizedLinesTokensDefaultThemeTokenDataBold = 'tokenizedLines___tokens___defaultThemeTokenData___bold',
  TokenizedLinesTokensDefaultThemeTokenDataClassName = 'tokenizedLines___tokens___defaultThemeTokenData___className',
  TokenizedLinesTokensDefaultThemeTokenDataColor = 'tokenizedLines___tokens___defaultThemeTokenData___color',
  TokenizedLinesTokensDefaultThemeTokenDataItalic = 'tokenizedLines___tokens___defaultThemeTokenData___italic',
  TokenizedLinesTokensDefaultThemeTokenDataMeta = 'tokenizedLines___tokens___defaultThemeTokenData___meta',
  TokenizedLinesTokensDefaultThemeTokenDataThemeIdentifier = 'tokenizedLines___tokens___defaultThemeTokenData___themeIdentifier',
  TokenizedLinesTokensDefaultThemeTokenDataUnderline = 'tokenizedLines___tokens___defaultThemeTokenData___underline',
  TokenizedLinesTokensEndIndex = 'tokenizedLines___tokens___endIndex',
  TokenizedLinesTokensHtml = 'tokenizedLines___tokens___html',
  TokenizedLinesTokensScopes = 'tokenizedLines___tokens___scopes',
  TokenizedLinesTokensStartIndex = 'tokenizedLines___tokens___startIndex',
  TokenizedLinesTokensText = 'tokenizedLines___tokens___text'
}

export type GrvscCodeBlockFilterInput = {
  additionalThemes?: InputMaybe<GrvscThemeFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  codeClassName?: InputMaybe<StringQueryOperatorInput>;
  defaultTheme?: InputMaybe<GrvscThemeFilterInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  index?: InputMaybe<IntQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  language?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  preClassName?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  tokenizedLines?: InputMaybe<GrvscTokenizedLineFilterListInput>;
};

export type GrvscCodeBlockFilterListInput = {
  elemMatch?: InputMaybe<GrvscCodeBlockFilterInput>;
};

export type GrvscCodeBlockGroupConnection = {
  __typename?: 'GRVSCCodeBlockGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GrvscCodeBlockEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GrvscCodeBlockGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GrvscCodeBlock>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GrvscCodeBlockGroupConnectionDistinctArgs = {
  field: GrvscCodeBlockFieldsEnum;
};


export type GrvscCodeBlockGroupConnectionGroupArgs = {
  field: GrvscCodeBlockFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GrvscCodeBlockGroupConnectionMaxArgs = {
  field: GrvscCodeBlockFieldsEnum;
};


export type GrvscCodeBlockGroupConnectionMinArgs = {
  field: GrvscCodeBlockFieldsEnum;
};


export type GrvscCodeBlockGroupConnectionSumArgs = {
  field: GrvscCodeBlockFieldsEnum;
};

export type GrvscCodeBlockSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GrvscCodeBlockFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GrvscCodeSpan = Node & {
  __typename?: 'GRVSCCodeSpan';
  additionalThemes: Array<GrvscTheme>;
  children: Array<Node>;
  className?: Maybe<Scalars['String']>;
  defaultTheme: GrvscTheme;
  html: Scalars['String'];
  id: Scalars['ID'];
  index: Scalars['Int'];
  internal: Internal;
  language?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  text: Scalars['String'];
  tokens: Array<GrvscToken>;
};

export type GrvscCodeSpanConnection = {
  __typename?: 'GRVSCCodeSpanConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GrvscCodeSpanEdge>;
  group: Array<GrvscCodeSpanGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GrvscCodeSpan>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GrvscCodeSpanConnectionDistinctArgs = {
  field: GrvscCodeSpanFieldsEnum;
};


export type GrvscCodeSpanConnectionGroupArgs = {
  field: GrvscCodeSpanFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GrvscCodeSpanConnectionMaxArgs = {
  field: GrvscCodeSpanFieldsEnum;
};


export type GrvscCodeSpanConnectionMinArgs = {
  field: GrvscCodeSpanFieldsEnum;
};


export type GrvscCodeSpanConnectionSumArgs = {
  field: GrvscCodeSpanFieldsEnum;
};

export type GrvscCodeSpanEdge = {
  __typename?: 'GRVSCCodeSpanEdge';
  next?: Maybe<GrvscCodeSpan>;
  node: GrvscCodeSpan;
  previous?: Maybe<GrvscCodeSpan>;
};

export enum GrvscCodeSpanFieldsEnum {
  AdditionalThemes = 'additionalThemes',
  AdditionalThemesConditions = 'additionalThemes___conditions',
  AdditionalThemesConditionsCondition = 'additionalThemes___conditions___condition',
  AdditionalThemesConditionsValue = 'additionalThemes___conditions___value',
  AdditionalThemesIdentifier = 'additionalThemes___identifier',
  AdditionalThemesPath = 'additionalThemes___path',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ClassName = 'className',
  DefaultThemeConditions = 'defaultTheme___conditions',
  DefaultThemeConditionsCondition = 'defaultTheme___conditions___condition',
  DefaultThemeConditionsValue = 'defaultTheme___conditions___value',
  DefaultThemeIdentifier = 'defaultTheme___identifier',
  DefaultThemePath = 'defaultTheme___path',
  Html = 'html',
  Id = 'id',
  Index = 'index',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Language = 'language',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Text = 'text',
  Tokens = 'tokens',
  TokensAdditionalThemeTokenData = 'tokens___additionalThemeTokenData',
  TokensAdditionalThemeTokenDataBold = 'tokens___additionalThemeTokenData___bold',
  TokensAdditionalThemeTokenDataClassName = 'tokens___additionalThemeTokenData___className',
  TokensAdditionalThemeTokenDataColor = 'tokens___additionalThemeTokenData___color',
  TokensAdditionalThemeTokenDataItalic = 'tokens___additionalThemeTokenData___italic',
  TokensAdditionalThemeTokenDataMeta = 'tokens___additionalThemeTokenData___meta',
  TokensAdditionalThemeTokenDataThemeIdentifier = 'tokens___additionalThemeTokenData___themeIdentifier',
  TokensAdditionalThemeTokenDataUnderline = 'tokens___additionalThemeTokenData___underline',
  TokensClassName = 'tokens___className',
  TokensDefaultThemeTokenDataBold = 'tokens___defaultThemeTokenData___bold',
  TokensDefaultThemeTokenDataClassName = 'tokens___defaultThemeTokenData___className',
  TokensDefaultThemeTokenDataColor = 'tokens___defaultThemeTokenData___color',
  TokensDefaultThemeTokenDataItalic = 'tokens___defaultThemeTokenData___italic',
  TokensDefaultThemeTokenDataMeta = 'tokens___defaultThemeTokenData___meta',
  TokensDefaultThemeTokenDataThemeIdentifier = 'tokens___defaultThemeTokenData___themeIdentifier',
  TokensDefaultThemeTokenDataUnderline = 'tokens___defaultThemeTokenData___underline',
  TokensEndIndex = 'tokens___endIndex',
  TokensHtml = 'tokens___html',
  TokensScopes = 'tokens___scopes',
  TokensStartIndex = 'tokens___startIndex',
  TokensText = 'tokens___text'
}

export type GrvscCodeSpanFilterInput = {
  additionalThemes?: InputMaybe<GrvscThemeFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  className?: InputMaybe<StringQueryOperatorInput>;
  defaultTheme?: InputMaybe<GrvscThemeFilterInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  index?: InputMaybe<IntQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  language?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  tokens?: InputMaybe<GrvscTokenFilterListInput>;
};

export type GrvscCodeSpanGroupConnection = {
  __typename?: 'GRVSCCodeSpanGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GrvscCodeSpanEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GrvscCodeSpanGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GrvscCodeSpan>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GrvscCodeSpanGroupConnectionDistinctArgs = {
  field: GrvscCodeSpanFieldsEnum;
};


export type GrvscCodeSpanGroupConnectionGroupArgs = {
  field: GrvscCodeSpanFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GrvscCodeSpanGroupConnectionMaxArgs = {
  field: GrvscCodeSpanFieldsEnum;
};


export type GrvscCodeSpanGroupConnectionMinArgs = {
  field: GrvscCodeSpanFieldsEnum;
};


export type GrvscCodeSpanGroupConnectionSumArgs = {
  field: GrvscCodeSpanFieldsEnum;
};

export type GrvscCodeSpanSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GrvscCodeSpanFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum GrvscDiff {
  Add = 'ADD',
  Del = 'DEL'
}

export type GrvscDiffQueryOperatorInput = {
  eq?: InputMaybe<GrvscDiff>;
  in?: InputMaybe<Array<InputMaybe<GrvscDiff>>>;
  ne?: InputMaybe<GrvscDiff>;
  nin?: InputMaybe<Array<InputMaybe<GrvscDiff>>>;
};

export type GrvscGutterCell = {
  __typename?: 'GRVSCGutterCell';
  className?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type GrvscGutterCellFilterInput = {
  className?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type GrvscGutterCellFilterListInput = {
  elemMatch?: InputMaybe<GrvscGutterCellFilterInput>;
};

export type GrvscStylesheet = Node & {
  __typename?: 'GRVSCStylesheet';
  children: Array<Node>;
  css: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type GrvscStylesheetConnection = {
  __typename?: 'GRVSCStylesheetConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GrvscStylesheetEdge>;
  group: Array<GrvscStylesheetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GrvscStylesheet>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GrvscStylesheetConnectionDistinctArgs = {
  field: GrvscStylesheetFieldsEnum;
};


export type GrvscStylesheetConnectionGroupArgs = {
  field: GrvscStylesheetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GrvscStylesheetConnectionMaxArgs = {
  field: GrvscStylesheetFieldsEnum;
};


export type GrvscStylesheetConnectionMinArgs = {
  field: GrvscStylesheetFieldsEnum;
};


export type GrvscStylesheetConnectionSumArgs = {
  field: GrvscStylesheetFieldsEnum;
};

export type GrvscStylesheetEdge = {
  __typename?: 'GRVSCStylesheetEdge';
  next?: Maybe<GrvscStylesheet>;
  node: GrvscStylesheet;
  previous?: Maybe<GrvscStylesheet>;
};

export enum GrvscStylesheetFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Css = 'css',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type GrvscStylesheetFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  css?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type GrvscStylesheetGroupConnection = {
  __typename?: 'GRVSCStylesheetGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GrvscStylesheetEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GrvscStylesheetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GrvscStylesheet>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type GrvscStylesheetGroupConnectionDistinctArgs = {
  field: GrvscStylesheetFieldsEnum;
};


export type GrvscStylesheetGroupConnectionGroupArgs = {
  field: GrvscStylesheetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type GrvscStylesheetGroupConnectionMaxArgs = {
  field: GrvscStylesheetFieldsEnum;
};


export type GrvscStylesheetGroupConnectionMinArgs = {
  field: GrvscStylesheetFieldsEnum;
};


export type GrvscStylesheetGroupConnectionSumArgs = {
  field: GrvscStylesheetFieldsEnum;
};

export type GrvscStylesheetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GrvscStylesheetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GrvscTheme = {
  __typename?: 'GRVSCTheme';
  conditions: Array<GrvscThemeCondition>;
  identifier: Scalars['String'];
  path: Scalars['String'];
};

export type GrvscThemeArgument = {
  conditions: Array<Scalars['String']>;
  identifier: Scalars['String'];
};

export type GrvscThemeCondition = {
  __typename?: 'GRVSCThemeCondition';
  condition: GrvscThemeConditionKind;
  value?: Maybe<Scalars['String']>;
};

export type GrvscThemeConditionFilterInput = {
  condition?: InputMaybe<GrvscThemeConditionKindQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type GrvscThemeConditionFilterListInput = {
  elemMatch?: InputMaybe<GrvscThemeConditionFilterInput>;
};

export enum GrvscThemeConditionKind {
  Default = 'default',
  MatchMedia = 'matchMedia',
  ParentSelector = 'parentSelector'
}

export type GrvscThemeConditionKindQueryOperatorInput = {
  eq?: InputMaybe<GrvscThemeConditionKind>;
  in?: InputMaybe<Array<InputMaybe<GrvscThemeConditionKind>>>;
  ne?: InputMaybe<GrvscThemeConditionKind>;
  nin?: InputMaybe<Array<InputMaybe<GrvscThemeConditionKind>>>;
};

export type GrvscThemeFilterInput = {
  conditions?: InputMaybe<GrvscThemeConditionFilterListInput>;
  identifier?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
};

export type GrvscThemeFilterListInput = {
  elemMatch?: InputMaybe<GrvscThemeFilterInput>;
};

export type GrvscThemeTokenData = {
  __typename?: 'GRVSCThemeTokenData';
  bold: Scalars['Boolean'];
  className: Scalars['String'];
  color: Scalars['String'];
  italic: Scalars['Boolean'];
  meta: Scalars['Int'];
  themeIdentifier: Scalars['String'];
  underline: Scalars['Boolean'];
};

export type GrvscThemeTokenDataFilterInput = {
  bold?: InputMaybe<BooleanQueryOperatorInput>;
  className?: InputMaybe<StringQueryOperatorInput>;
  color?: InputMaybe<StringQueryOperatorInput>;
  italic?: InputMaybe<BooleanQueryOperatorInput>;
  meta?: InputMaybe<IntQueryOperatorInput>;
  themeIdentifier?: InputMaybe<StringQueryOperatorInput>;
  underline?: InputMaybe<BooleanQueryOperatorInput>;
};

export type GrvscThemeTokenDataFilterListInput = {
  elemMatch?: InputMaybe<GrvscThemeTokenDataFilterInput>;
};

export type GrvscToken = {
  __typename?: 'GRVSCToken';
  additionalThemeTokenData: Array<GrvscThemeTokenData>;
  className: Scalars['String'];
  defaultThemeTokenData: GrvscThemeTokenData;
  endIndex: Scalars['Int'];
  html: Scalars['String'];
  scopes: Array<Scalars['String']>;
  startIndex: Scalars['Int'];
  text: Scalars['String'];
};

export type GrvscTokenFilterInput = {
  additionalThemeTokenData?: InputMaybe<GrvscThemeTokenDataFilterListInput>;
  className?: InputMaybe<StringQueryOperatorInput>;
  defaultThemeTokenData?: InputMaybe<GrvscThemeTokenDataFilterInput>;
  endIndex?: InputMaybe<IntQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  scopes?: InputMaybe<StringQueryOperatorInput>;
  startIndex?: InputMaybe<IntQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type GrvscTokenFilterListInput = {
  elemMatch?: InputMaybe<GrvscTokenFilterInput>;
};

export type GrvscTokenizedLine = {
  __typename?: 'GRVSCTokenizedLine';
  attrs: Scalars['JSON'];
  className: Scalars['String'];
  data: Scalars['JSON'];
  diff?: Maybe<GrvscDiff>;
  gutterCells?: Maybe<Array<Maybe<GrvscGutterCell>>>;
  html: Scalars['String'];
  isHighlighted?: Maybe<Scalars['Boolean']>;
  lineNumber?: Maybe<Scalars['Int']>;
  text: Scalars['String'];
  tokens: Array<GrvscToken>;
};

export type GrvscTokenizedLineFilterInput = {
  attrs?: InputMaybe<JsonQueryOperatorInput>;
  className?: InputMaybe<StringQueryOperatorInput>;
  data?: InputMaybe<JsonQueryOperatorInput>;
  diff?: InputMaybe<GrvscDiffQueryOperatorInput>;
  gutterCells?: InputMaybe<GrvscGutterCellFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  isHighlighted?: InputMaybe<BooleanQueryOperatorInput>;
  lineNumber?: InputMaybe<IntQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  tokens?: InputMaybe<GrvscTokenFilterListInput>;
};

export type GrvscTokenizedLineFilterListInput = {
  elemMatch?: InputMaybe<GrvscTokenizedLineFilterInput>;
};

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST'
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedBase64 = 'fixed___base64',
  FixedHeight = 'fixed___height',
  FixedOriginalName = 'fixed___originalName',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedWidth = 'fixed___width',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidBase64 = 'fluid___base64',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationHeight = 'fluid___presentationHeight',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidSizes = 'fluid___sizes',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidTracedSvg = 'fluid___tracedSVG',
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  OriginalWidth = 'original___width',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeHeight = 'resize___height',
  ResizeOriginalName = 'resize___originalName',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width'
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Plain = 'PLAIN'
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  depth?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MarkdownHeadingFilterInput = {
  depth?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: InputMaybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  /** Returns the first child node of type GRVSCCodeBlock or null if there are no children of given type on this node */
  childGrvscCodeBlock?: Maybe<GrvscCodeBlock>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type GRVSCCodeBlock */
  childrenGrvscCodeBlock?: Maybe<Array<Maybe<GrvscCodeBlock>>>;
  excerpt?: Maybe<Scalars['String']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  fields?: Maybe<MarkdownRemarkFields>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  grvscCodeBlocks?: Maybe<Array<Maybe<GrvscCodeBlock>>>;
  grvscCodeSpans?: Maybe<Array<Maybe<GrvscCodeSpan>>>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  tableOfContents?: Maybe<Scalars['String']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MarkdownWordCount>;
};


export type MarkdownRemarkExcerptArgs = {
  format?: InputMaybe<MarkdownExcerptFormats>;
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: InputMaybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Scalars['String']>;
  maxDepth?: InputMaybe<Scalars['Int']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MarkdownRemarkEdge>;
  group: Array<MarkdownRemarkGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  __typename?: 'MarkdownRemarkFields';
  slug?: Maybe<Scalars['String']>;
};

export enum MarkdownRemarkFieldsEnum {
  ChildGrvscCodeBlockAdditionalThemes = 'childGrvscCodeBlock___additionalThemes',
  ChildGrvscCodeBlockAdditionalThemesConditions = 'childGrvscCodeBlock___additionalThemes___conditions',
  ChildGrvscCodeBlockAdditionalThemesConditionsCondition = 'childGrvscCodeBlock___additionalThemes___conditions___condition',
  ChildGrvscCodeBlockAdditionalThemesConditionsValue = 'childGrvscCodeBlock___additionalThemes___conditions___value',
  ChildGrvscCodeBlockAdditionalThemesIdentifier = 'childGrvscCodeBlock___additionalThemes___identifier',
  ChildGrvscCodeBlockAdditionalThemesPath = 'childGrvscCodeBlock___additionalThemes___path',
  ChildGrvscCodeBlockChildren = 'childGrvscCodeBlock___children',
  ChildGrvscCodeBlockChildrenChildren = 'childGrvscCodeBlock___children___children',
  ChildGrvscCodeBlockChildrenChildrenChildren = 'childGrvscCodeBlock___children___children___children',
  ChildGrvscCodeBlockChildrenChildrenId = 'childGrvscCodeBlock___children___children___id',
  ChildGrvscCodeBlockChildrenId = 'childGrvscCodeBlock___children___id',
  ChildGrvscCodeBlockChildrenInternalContent = 'childGrvscCodeBlock___children___internal___content',
  ChildGrvscCodeBlockChildrenInternalContentDigest = 'childGrvscCodeBlock___children___internal___contentDigest',
  ChildGrvscCodeBlockChildrenInternalDescription = 'childGrvscCodeBlock___children___internal___description',
  ChildGrvscCodeBlockChildrenInternalFieldOwners = 'childGrvscCodeBlock___children___internal___fieldOwners',
  ChildGrvscCodeBlockChildrenInternalIgnoreType = 'childGrvscCodeBlock___children___internal___ignoreType',
  ChildGrvscCodeBlockChildrenInternalMediaType = 'childGrvscCodeBlock___children___internal___mediaType',
  ChildGrvscCodeBlockChildrenInternalOwner = 'childGrvscCodeBlock___children___internal___owner',
  ChildGrvscCodeBlockChildrenInternalType = 'childGrvscCodeBlock___children___internal___type',
  ChildGrvscCodeBlockChildrenParentChildren = 'childGrvscCodeBlock___children___parent___children',
  ChildGrvscCodeBlockChildrenParentId = 'childGrvscCodeBlock___children___parent___id',
  ChildGrvscCodeBlockCodeClassName = 'childGrvscCodeBlock___codeClassName',
  ChildGrvscCodeBlockDefaultThemeConditions = 'childGrvscCodeBlock___defaultTheme___conditions',
  ChildGrvscCodeBlockDefaultThemeConditionsCondition = 'childGrvscCodeBlock___defaultTheme___conditions___condition',
  ChildGrvscCodeBlockDefaultThemeConditionsValue = 'childGrvscCodeBlock___defaultTheme___conditions___value',
  ChildGrvscCodeBlockDefaultThemeIdentifier = 'childGrvscCodeBlock___defaultTheme___identifier',
  ChildGrvscCodeBlockDefaultThemePath = 'childGrvscCodeBlock___defaultTheme___path',
  ChildGrvscCodeBlockHtml = 'childGrvscCodeBlock___html',
  ChildGrvscCodeBlockId = 'childGrvscCodeBlock___id',
  ChildGrvscCodeBlockIndex = 'childGrvscCodeBlock___index',
  ChildGrvscCodeBlockInternalContent = 'childGrvscCodeBlock___internal___content',
  ChildGrvscCodeBlockInternalContentDigest = 'childGrvscCodeBlock___internal___contentDigest',
  ChildGrvscCodeBlockInternalDescription = 'childGrvscCodeBlock___internal___description',
  ChildGrvscCodeBlockInternalFieldOwners = 'childGrvscCodeBlock___internal___fieldOwners',
  ChildGrvscCodeBlockInternalIgnoreType = 'childGrvscCodeBlock___internal___ignoreType',
  ChildGrvscCodeBlockInternalMediaType = 'childGrvscCodeBlock___internal___mediaType',
  ChildGrvscCodeBlockInternalOwner = 'childGrvscCodeBlock___internal___owner',
  ChildGrvscCodeBlockInternalType = 'childGrvscCodeBlock___internal___type',
  ChildGrvscCodeBlockLanguage = 'childGrvscCodeBlock___language',
  ChildGrvscCodeBlockMeta = 'childGrvscCodeBlock___meta',
  ChildGrvscCodeBlockParentChildren = 'childGrvscCodeBlock___parent___children',
  ChildGrvscCodeBlockParentChildrenChildren = 'childGrvscCodeBlock___parent___children___children',
  ChildGrvscCodeBlockParentChildrenId = 'childGrvscCodeBlock___parent___children___id',
  ChildGrvscCodeBlockParentId = 'childGrvscCodeBlock___parent___id',
  ChildGrvscCodeBlockParentInternalContent = 'childGrvscCodeBlock___parent___internal___content',
  ChildGrvscCodeBlockParentInternalContentDigest = 'childGrvscCodeBlock___parent___internal___contentDigest',
  ChildGrvscCodeBlockParentInternalDescription = 'childGrvscCodeBlock___parent___internal___description',
  ChildGrvscCodeBlockParentInternalFieldOwners = 'childGrvscCodeBlock___parent___internal___fieldOwners',
  ChildGrvscCodeBlockParentInternalIgnoreType = 'childGrvscCodeBlock___parent___internal___ignoreType',
  ChildGrvscCodeBlockParentInternalMediaType = 'childGrvscCodeBlock___parent___internal___mediaType',
  ChildGrvscCodeBlockParentInternalOwner = 'childGrvscCodeBlock___parent___internal___owner',
  ChildGrvscCodeBlockParentInternalType = 'childGrvscCodeBlock___parent___internal___type',
  ChildGrvscCodeBlockParentParentChildren = 'childGrvscCodeBlock___parent___parent___children',
  ChildGrvscCodeBlockParentParentId = 'childGrvscCodeBlock___parent___parent___id',
  ChildGrvscCodeBlockPreClassName = 'childGrvscCodeBlock___preClassName',
  ChildGrvscCodeBlockText = 'childGrvscCodeBlock___text',
  ChildGrvscCodeBlockTokenizedLines = 'childGrvscCodeBlock___tokenizedLines',
  ChildGrvscCodeBlockTokenizedLinesAttrs = 'childGrvscCodeBlock___tokenizedLines___attrs',
  ChildGrvscCodeBlockTokenizedLinesClassName = 'childGrvscCodeBlock___tokenizedLines___className',
  ChildGrvscCodeBlockTokenizedLinesData = 'childGrvscCodeBlock___tokenizedLines___data',
  ChildGrvscCodeBlockTokenizedLinesDiff = 'childGrvscCodeBlock___tokenizedLines___diff',
  ChildGrvscCodeBlockTokenizedLinesGutterCells = 'childGrvscCodeBlock___tokenizedLines___gutterCells',
  ChildGrvscCodeBlockTokenizedLinesGutterCellsClassName = 'childGrvscCodeBlock___tokenizedLines___gutterCells___className',
  ChildGrvscCodeBlockTokenizedLinesGutterCellsText = 'childGrvscCodeBlock___tokenizedLines___gutterCells___text',
  ChildGrvscCodeBlockTokenizedLinesHtml = 'childGrvscCodeBlock___tokenizedLines___html',
  ChildGrvscCodeBlockTokenizedLinesIsHighlighted = 'childGrvscCodeBlock___tokenizedLines___isHighlighted',
  ChildGrvscCodeBlockTokenizedLinesLineNumber = 'childGrvscCodeBlock___tokenizedLines___lineNumber',
  ChildGrvscCodeBlockTokenizedLinesText = 'childGrvscCodeBlock___tokenizedLines___text',
  ChildGrvscCodeBlockTokenizedLinesTokens = 'childGrvscCodeBlock___tokenizedLines___tokens',
  ChildGrvscCodeBlockTokenizedLinesTokensAdditionalThemeTokenData = 'childGrvscCodeBlock___tokenizedLines___tokens___additionalThemeTokenData',
  ChildGrvscCodeBlockTokenizedLinesTokensClassName = 'childGrvscCodeBlock___tokenizedLines___tokens___className',
  ChildGrvscCodeBlockTokenizedLinesTokensEndIndex = 'childGrvscCodeBlock___tokenizedLines___tokens___endIndex',
  ChildGrvscCodeBlockTokenizedLinesTokensHtml = 'childGrvscCodeBlock___tokenizedLines___tokens___html',
  ChildGrvscCodeBlockTokenizedLinesTokensScopes = 'childGrvscCodeBlock___tokenizedLines___tokens___scopes',
  ChildGrvscCodeBlockTokenizedLinesTokensStartIndex = 'childGrvscCodeBlock___tokenizedLines___tokens___startIndex',
  ChildGrvscCodeBlockTokenizedLinesTokensText = 'childGrvscCodeBlock___tokenizedLines___tokens___text',
  Children = 'children',
  ChildrenGrvscCodeBlock = 'childrenGrvscCodeBlock',
  ChildrenGrvscCodeBlockAdditionalThemes = 'childrenGrvscCodeBlock___additionalThemes',
  ChildrenGrvscCodeBlockAdditionalThemesConditions = 'childrenGrvscCodeBlock___additionalThemes___conditions',
  ChildrenGrvscCodeBlockAdditionalThemesConditionsCondition = 'childrenGrvscCodeBlock___additionalThemes___conditions___condition',
  ChildrenGrvscCodeBlockAdditionalThemesConditionsValue = 'childrenGrvscCodeBlock___additionalThemes___conditions___value',
  ChildrenGrvscCodeBlockAdditionalThemesIdentifier = 'childrenGrvscCodeBlock___additionalThemes___identifier',
  ChildrenGrvscCodeBlockAdditionalThemesPath = 'childrenGrvscCodeBlock___additionalThemes___path',
  ChildrenGrvscCodeBlockChildren = 'childrenGrvscCodeBlock___children',
  ChildrenGrvscCodeBlockChildrenChildren = 'childrenGrvscCodeBlock___children___children',
  ChildrenGrvscCodeBlockChildrenChildrenChildren = 'childrenGrvscCodeBlock___children___children___children',
  ChildrenGrvscCodeBlockChildrenChildrenId = 'childrenGrvscCodeBlock___children___children___id',
  ChildrenGrvscCodeBlockChildrenId = 'childrenGrvscCodeBlock___children___id',
  ChildrenGrvscCodeBlockChildrenInternalContent = 'childrenGrvscCodeBlock___children___internal___content',
  ChildrenGrvscCodeBlockChildrenInternalContentDigest = 'childrenGrvscCodeBlock___children___internal___contentDigest',
  ChildrenGrvscCodeBlockChildrenInternalDescription = 'childrenGrvscCodeBlock___children___internal___description',
  ChildrenGrvscCodeBlockChildrenInternalFieldOwners = 'childrenGrvscCodeBlock___children___internal___fieldOwners',
  ChildrenGrvscCodeBlockChildrenInternalIgnoreType = 'childrenGrvscCodeBlock___children___internal___ignoreType',
  ChildrenGrvscCodeBlockChildrenInternalMediaType = 'childrenGrvscCodeBlock___children___internal___mediaType',
  ChildrenGrvscCodeBlockChildrenInternalOwner = 'childrenGrvscCodeBlock___children___internal___owner',
  ChildrenGrvscCodeBlockChildrenInternalType = 'childrenGrvscCodeBlock___children___internal___type',
  ChildrenGrvscCodeBlockChildrenParentChildren = 'childrenGrvscCodeBlock___children___parent___children',
  ChildrenGrvscCodeBlockChildrenParentId = 'childrenGrvscCodeBlock___children___parent___id',
  ChildrenGrvscCodeBlockCodeClassName = 'childrenGrvscCodeBlock___codeClassName',
  ChildrenGrvscCodeBlockDefaultThemeConditions = 'childrenGrvscCodeBlock___defaultTheme___conditions',
  ChildrenGrvscCodeBlockDefaultThemeConditionsCondition = 'childrenGrvscCodeBlock___defaultTheme___conditions___condition',
  ChildrenGrvscCodeBlockDefaultThemeConditionsValue = 'childrenGrvscCodeBlock___defaultTheme___conditions___value',
  ChildrenGrvscCodeBlockDefaultThemeIdentifier = 'childrenGrvscCodeBlock___defaultTheme___identifier',
  ChildrenGrvscCodeBlockDefaultThemePath = 'childrenGrvscCodeBlock___defaultTheme___path',
  ChildrenGrvscCodeBlockHtml = 'childrenGrvscCodeBlock___html',
  ChildrenGrvscCodeBlockId = 'childrenGrvscCodeBlock___id',
  ChildrenGrvscCodeBlockIndex = 'childrenGrvscCodeBlock___index',
  ChildrenGrvscCodeBlockInternalContent = 'childrenGrvscCodeBlock___internal___content',
  ChildrenGrvscCodeBlockInternalContentDigest = 'childrenGrvscCodeBlock___internal___contentDigest',
  ChildrenGrvscCodeBlockInternalDescription = 'childrenGrvscCodeBlock___internal___description',
  ChildrenGrvscCodeBlockInternalFieldOwners = 'childrenGrvscCodeBlock___internal___fieldOwners',
  ChildrenGrvscCodeBlockInternalIgnoreType = 'childrenGrvscCodeBlock___internal___ignoreType',
  ChildrenGrvscCodeBlockInternalMediaType = 'childrenGrvscCodeBlock___internal___mediaType',
  ChildrenGrvscCodeBlockInternalOwner = 'childrenGrvscCodeBlock___internal___owner',
  ChildrenGrvscCodeBlockInternalType = 'childrenGrvscCodeBlock___internal___type',
  ChildrenGrvscCodeBlockLanguage = 'childrenGrvscCodeBlock___language',
  ChildrenGrvscCodeBlockMeta = 'childrenGrvscCodeBlock___meta',
  ChildrenGrvscCodeBlockParentChildren = 'childrenGrvscCodeBlock___parent___children',
  ChildrenGrvscCodeBlockParentChildrenChildren = 'childrenGrvscCodeBlock___parent___children___children',
  ChildrenGrvscCodeBlockParentChildrenId = 'childrenGrvscCodeBlock___parent___children___id',
  ChildrenGrvscCodeBlockParentId = 'childrenGrvscCodeBlock___parent___id',
  ChildrenGrvscCodeBlockParentInternalContent = 'childrenGrvscCodeBlock___parent___internal___content',
  ChildrenGrvscCodeBlockParentInternalContentDigest = 'childrenGrvscCodeBlock___parent___internal___contentDigest',
  ChildrenGrvscCodeBlockParentInternalDescription = 'childrenGrvscCodeBlock___parent___internal___description',
  ChildrenGrvscCodeBlockParentInternalFieldOwners = 'childrenGrvscCodeBlock___parent___internal___fieldOwners',
  ChildrenGrvscCodeBlockParentInternalIgnoreType = 'childrenGrvscCodeBlock___parent___internal___ignoreType',
  ChildrenGrvscCodeBlockParentInternalMediaType = 'childrenGrvscCodeBlock___parent___internal___mediaType',
  ChildrenGrvscCodeBlockParentInternalOwner = 'childrenGrvscCodeBlock___parent___internal___owner',
  ChildrenGrvscCodeBlockParentInternalType = 'childrenGrvscCodeBlock___parent___internal___type',
  ChildrenGrvscCodeBlockParentParentChildren = 'childrenGrvscCodeBlock___parent___parent___children',
  ChildrenGrvscCodeBlockParentParentId = 'childrenGrvscCodeBlock___parent___parent___id',
  ChildrenGrvscCodeBlockPreClassName = 'childrenGrvscCodeBlock___preClassName',
  ChildrenGrvscCodeBlockText = 'childrenGrvscCodeBlock___text',
  ChildrenGrvscCodeBlockTokenizedLines = 'childrenGrvscCodeBlock___tokenizedLines',
  ChildrenGrvscCodeBlockTokenizedLinesAttrs = 'childrenGrvscCodeBlock___tokenizedLines___attrs',
  ChildrenGrvscCodeBlockTokenizedLinesClassName = 'childrenGrvscCodeBlock___tokenizedLines___className',
  ChildrenGrvscCodeBlockTokenizedLinesData = 'childrenGrvscCodeBlock___tokenizedLines___data',
  ChildrenGrvscCodeBlockTokenizedLinesDiff = 'childrenGrvscCodeBlock___tokenizedLines___diff',
  ChildrenGrvscCodeBlockTokenizedLinesGutterCells = 'childrenGrvscCodeBlock___tokenizedLines___gutterCells',
  ChildrenGrvscCodeBlockTokenizedLinesGutterCellsClassName = 'childrenGrvscCodeBlock___tokenizedLines___gutterCells___className',
  ChildrenGrvscCodeBlockTokenizedLinesGutterCellsText = 'childrenGrvscCodeBlock___tokenizedLines___gutterCells___text',
  ChildrenGrvscCodeBlockTokenizedLinesHtml = 'childrenGrvscCodeBlock___tokenizedLines___html',
  ChildrenGrvscCodeBlockTokenizedLinesIsHighlighted = 'childrenGrvscCodeBlock___tokenizedLines___isHighlighted',
  ChildrenGrvscCodeBlockTokenizedLinesLineNumber = 'childrenGrvscCodeBlock___tokenizedLines___lineNumber',
  ChildrenGrvscCodeBlockTokenizedLinesText = 'childrenGrvscCodeBlock___tokenizedLines___text',
  ChildrenGrvscCodeBlockTokenizedLinesTokens = 'childrenGrvscCodeBlock___tokenizedLines___tokens',
  ChildrenGrvscCodeBlockTokenizedLinesTokensAdditionalThemeTokenData = 'childrenGrvscCodeBlock___tokenizedLines___tokens___additionalThemeTokenData',
  ChildrenGrvscCodeBlockTokenizedLinesTokensClassName = 'childrenGrvscCodeBlock___tokenizedLines___tokens___className',
  ChildrenGrvscCodeBlockTokenizedLinesTokensEndIndex = 'childrenGrvscCodeBlock___tokenizedLines___tokens___endIndex',
  ChildrenGrvscCodeBlockTokenizedLinesTokensHtml = 'childrenGrvscCodeBlock___tokenizedLines___tokens___html',
  ChildrenGrvscCodeBlockTokenizedLinesTokensScopes = 'childrenGrvscCodeBlock___tokenizedLines___tokens___scopes',
  ChildrenGrvscCodeBlockTokenizedLinesTokensStartIndex = 'childrenGrvscCodeBlock___tokenizedLines___tokens___startIndex',
  ChildrenGrvscCodeBlockTokenizedLinesTokensText = 'childrenGrvscCodeBlock___tokenizedLines___tokens___text',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Excerpt = 'excerpt',
  ExcerptAst = 'excerptAst',
  FieldsSlug = 'fields___slug',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterAlt = 'frontmatter___alt',
  FrontmatterCategory = 'frontmatter___category',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterDesc = 'frontmatter___desc',
  FrontmatterThumbnailAbsolutePath = 'frontmatter___thumbnail___absolutePath',
  FrontmatterThumbnailAccessTime = 'frontmatter___thumbnail___accessTime',
  FrontmatterThumbnailAtime = 'frontmatter___thumbnail___atime',
  FrontmatterThumbnailAtimeMs = 'frontmatter___thumbnail___atimeMs',
  FrontmatterThumbnailBase = 'frontmatter___thumbnail___base',
  FrontmatterThumbnailBirthTime = 'frontmatter___thumbnail___birthTime',
  FrontmatterThumbnailBirthtime = 'frontmatter___thumbnail___birthtime',
  FrontmatterThumbnailBirthtimeMs = 'frontmatter___thumbnail___birthtimeMs',
  FrontmatterThumbnailBlksize = 'frontmatter___thumbnail___blksize',
  FrontmatterThumbnailBlocks = 'frontmatter___thumbnail___blocks',
  FrontmatterThumbnailChangeTime = 'frontmatter___thumbnail___changeTime',
  FrontmatterThumbnailChildImageSharpChildren = 'frontmatter___thumbnail___childImageSharp___children',
  FrontmatterThumbnailChildImageSharpGatsbyImageData = 'frontmatter___thumbnail___childImageSharp___gatsbyImageData',
  FrontmatterThumbnailChildImageSharpId = 'frontmatter___thumbnail___childImageSharp___id',
  FrontmatterThumbnailChildMarkdownRemarkChildren = 'frontmatter___thumbnail___childMarkdownRemark___children',
  FrontmatterThumbnailChildMarkdownRemarkChildrenGrvscCodeBlock = 'frontmatter___thumbnail___childMarkdownRemark___childrenGrvscCodeBlock',
  FrontmatterThumbnailChildMarkdownRemarkExcerpt = 'frontmatter___thumbnail___childMarkdownRemark___excerpt',
  FrontmatterThumbnailChildMarkdownRemarkExcerptAst = 'frontmatter___thumbnail___childMarkdownRemark___excerptAst',
  FrontmatterThumbnailChildMarkdownRemarkFileAbsolutePath = 'frontmatter___thumbnail___childMarkdownRemark___fileAbsolutePath',
  FrontmatterThumbnailChildMarkdownRemarkHeadings = 'frontmatter___thumbnail___childMarkdownRemark___headings',
  FrontmatterThumbnailChildMarkdownRemarkHtml = 'frontmatter___thumbnail___childMarkdownRemark___html',
  FrontmatterThumbnailChildMarkdownRemarkHtmlAst = 'frontmatter___thumbnail___childMarkdownRemark___htmlAst',
  FrontmatterThumbnailChildMarkdownRemarkId = 'frontmatter___thumbnail___childMarkdownRemark___id',
  FrontmatterThumbnailChildMarkdownRemarkRawMarkdownBody = 'frontmatter___thumbnail___childMarkdownRemark___rawMarkdownBody',
  FrontmatterThumbnailChildMarkdownRemarkTableOfContents = 'frontmatter___thumbnail___childMarkdownRemark___tableOfContents',
  FrontmatterThumbnailChildMarkdownRemarkTimeToRead = 'frontmatter___thumbnail___childMarkdownRemark___timeToRead',
  FrontmatterThumbnailChildren = 'frontmatter___thumbnail___children',
  FrontmatterThumbnailChildrenImageSharp = 'frontmatter___thumbnail___childrenImageSharp',
  FrontmatterThumbnailChildrenImageSharpChildren = 'frontmatter___thumbnail___childrenImageSharp___children',
  FrontmatterThumbnailChildrenImageSharpGatsbyImageData = 'frontmatter___thumbnail___childrenImageSharp___gatsbyImageData',
  FrontmatterThumbnailChildrenImageSharpId = 'frontmatter___thumbnail___childrenImageSharp___id',
  FrontmatterThumbnailChildrenMarkdownRemark = 'frontmatter___thumbnail___childrenMarkdownRemark',
  FrontmatterThumbnailChildrenMarkdownRemarkChildren = 'frontmatter___thumbnail___childrenMarkdownRemark___children',
  FrontmatterThumbnailChildrenMarkdownRemarkChildrenGrvscCodeBlock = 'frontmatter___thumbnail___childrenMarkdownRemark___childrenGrvscCodeBlock',
  FrontmatterThumbnailChildrenMarkdownRemarkExcerpt = 'frontmatter___thumbnail___childrenMarkdownRemark___excerpt',
  FrontmatterThumbnailChildrenMarkdownRemarkExcerptAst = 'frontmatter___thumbnail___childrenMarkdownRemark___excerptAst',
  FrontmatterThumbnailChildrenMarkdownRemarkFileAbsolutePath = 'frontmatter___thumbnail___childrenMarkdownRemark___fileAbsolutePath',
  FrontmatterThumbnailChildrenMarkdownRemarkHeadings = 'frontmatter___thumbnail___childrenMarkdownRemark___headings',
  FrontmatterThumbnailChildrenMarkdownRemarkHtml = 'frontmatter___thumbnail___childrenMarkdownRemark___html',
  FrontmatterThumbnailChildrenMarkdownRemarkHtmlAst = 'frontmatter___thumbnail___childrenMarkdownRemark___htmlAst',
  FrontmatterThumbnailChildrenMarkdownRemarkId = 'frontmatter___thumbnail___childrenMarkdownRemark___id',
  FrontmatterThumbnailChildrenMarkdownRemarkRawMarkdownBody = 'frontmatter___thumbnail___childrenMarkdownRemark___rawMarkdownBody',
  FrontmatterThumbnailChildrenMarkdownRemarkTableOfContents = 'frontmatter___thumbnail___childrenMarkdownRemark___tableOfContents',
  FrontmatterThumbnailChildrenMarkdownRemarkTimeToRead = 'frontmatter___thumbnail___childrenMarkdownRemark___timeToRead',
  FrontmatterThumbnailChildrenChildren = 'frontmatter___thumbnail___children___children',
  FrontmatterThumbnailChildrenId = 'frontmatter___thumbnail___children___id',
  FrontmatterThumbnailCtime = 'frontmatter___thumbnail___ctime',
  FrontmatterThumbnailCtimeMs = 'frontmatter___thumbnail___ctimeMs',
  FrontmatterThumbnailDev = 'frontmatter___thumbnail___dev',
  FrontmatterThumbnailDir = 'frontmatter___thumbnail___dir',
  FrontmatterThumbnailExt = 'frontmatter___thumbnail___ext',
  FrontmatterThumbnailExtension = 'frontmatter___thumbnail___extension',
  FrontmatterThumbnailGid = 'frontmatter___thumbnail___gid',
  FrontmatterThumbnailId = 'frontmatter___thumbnail___id',
  FrontmatterThumbnailIno = 'frontmatter___thumbnail___ino',
  FrontmatterThumbnailInternalContent = 'frontmatter___thumbnail___internal___content',
  FrontmatterThumbnailInternalContentDigest = 'frontmatter___thumbnail___internal___contentDigest',
  FrontmatterThumbnailInternalDescription = 'frontmatter___thumbnail___internal___description',
  FrontmatterThumbnailInternalFieldOwners = 'frontmatter___thumbnail___internal___fieldOwners',
  FrontmatterThumbnailInternalIgnoreType = 'frontmatter___thumbnail___internal___ignoreType',
  FrontmatterThumbnailInternalMediaType = 'frontmatter___thumbnail___internal___mediaType',
  FrontmatterThumbnailInternalOwner = 'frontmatter___thumbnail___internal___owner',
  FrontmatterThumbnailInternalType = 'frontmatter___thumbnail___internal___type',
  FrontmatterThumbnailMode = 'frontmatter___thumbnail___mode',
  FrontmatterThumbnailModifiedTime = 'frontmatter___thumbnail___modifiedTime',
  FrontmatterThumbnailMtime = 'frontmatter___thumbnail___mtime',
  FrontmatterThumbnailMtimeMs = 'frontmatter___thumbnail___mtimeMs',
  FrontmatterThumbnailName = 'frontmatter___thumbnail___name',
  FrontmatterThumbnailNlink = 'frontmatter___thumbnail___nlink',
  FrontmatterThumbnailParentChildren = 'frontmatter___thumbnail___parent___children',
  FrontmatterThumbnailParentId = 'frontmatter___thumbnail___parent___id',
  FrontmatterThumbnailPrettySize = 'frontmatter___thumbnail___prettySize',
  FrontmatterThumbnailPublicUrl = 'frontmatter___thumbnail___publicURL',
  FrontmatterThumbnailRdev = 'frontmatter___thumbnail___rdev',
  FrontmatterThumbnailRelativeDirectory = 'frontmatter___thumbnail___relativeDirectory',
  FrontmatterThumbnailRelativePath = 'frontmatter___thumbnail___relativePath',
  FrontmatterThumbnailRoot = 'frontmatter___thumbnail___root',
  FrontmatterThumbnailSize = 'frontmatter___thumbnail___size',
  FrontmatterThumbnailSourceInstanceName = 'frontmatter___thumbnail___sourceInstanceName',
  FrontmatterThumbnailUid = 'frontmatter___thumbnail___uid',
  FrontmatterTitle = 'frontmatter___title',
  Headings = 'headings',
  HeadingsDepth = 'headings___depth',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  Html = 'html',
  HtmlAst = 'htmlAst',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  RawMarkdownBody = 'rawMarkdownBody',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words'
}

export type MarkdownRemarkFieldsFilterInput = {
  slug?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  childGrvscCodeBlock?: InputMaybe<GrvscCodeBlockFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenGrvscCodeBlock?: InputMaybe<GrvscCodeBlockFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  fields?: InputMaybe<MarkdownRemarkFieldsFilterInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  alt?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  desc?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<File>;
  title?: Maybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  category?: InputMaybe<StringQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  desc?: InputMaybe<StringQueryOperatorInput>;
  thumbnail?: InputMaybe<FileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MarkdownRemarkEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MarkdownRemarkFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']>;
  background?: InputMaybe<Scalars['String']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  turdSize?: InputMaybe<Scalars['Float']>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE'
}

export type Query = {
  __typename?: 'Query';
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allGrvscCodeBlock: GrvscCodeBlockConnection;
  allGrvscCodeSpan: GrvscCodeSpanConnection;
  allGrvscStylesheet: GrvscStylesheetConnection;
  allImageSharp: ImageSharpConnection;
  allMarkdownRemark: MarkdownRemarkConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  grvscCodeBlock?: Maybe<GrvscCodeBlock>;
  grvscCodeSpan?: Maybe<GrvscCodeSpan>;
  grvscHighlight?: Maybe<GrvscCodeBlock>;
  grvscStylesheet?: Maybe<GrvscStylesheet>;
  imageSharp?: Maybe<ImageSharp>;
  markdownRemark?: Maybe<MarkdownRemark>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileSortInput>;
};


export type QueryAllGrvscCodeBlockArgs = {
  filter?: InputMaybe<GrvscCodeBlockFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GrvscCodeBlockSortInput>;
};


export type QueryAllGrvscCodeSpanArgs = {
  filter?: InputMaybe<GrvscCodeSpanFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GrvscCodeSpanSortInput>;
};


export type QueryAllGrvscStylesheetArgs = {
  filter?: InputMaybe<GrvscStylesheetFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GrvscStylesheetSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ImageSharpSortInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: InputMaybe<MarkdownRemarkFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MarkdownRemarkSortInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePluginSortInput>;
};


export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryGrvscCodeBlockArgs = {
  additionalThemes?: InputMaybe<GrvscThemeFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  codeClassName?: InputMaybe<StringQueryOperatorInput>;
  defaultTheme?: InputMaybe<GrvscThemeFilterInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  index?: InputMaybe<IntQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  language?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  preClassName?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  tokenizedLines?: InputMaybe<GrvscTokenizedLineFilterListInput>;
};


export type QueryGrvscCodeSpanArgs = {
  additionalThemes?: InputMaybe<GrvscThemeFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  className?: InputMaybe<StringQueryOperatorInput>;
  defaultTheme?: InputMaybe<GrvscThemeFilterInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  index?: InputMaybe<IntQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  language?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  tokens?: InputMaybe<GrvscTokenFilterListInput>;
};


export type QueryGrvscHighlightArgs = {
  additionalThemes?: InputMaybe<Array<GrvscThemeArgument>>;
  defaultTheme?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['String']>;
  source: Scalars['String'];
};


export type QueryGrvscStylesheetArgs = {
  additionalThemes?: InputMaybe<Array<GrvscThemeArgument>>;
  defaultTheme?: InputMaybe<Scalars['String']>;
  injectStyles?: InputMaybe<Scalars['Boolean']>;
};


export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};


export type QueryMarkdownRemarkArgs = {
  childGrvscCodeBlock?: InputMaybe<GrvscCodeBlockFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenGrvscCodeBlock?: InputMaybe<GrvscCodeBlockFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  fields?: InputMaybe<MarkdownRemarkFieldsFilterInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
};


export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  JsxRuntime = 'jsxRuntime',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataLang = 'siteMetadata___lang',
  SiteMetadataMenuLinks = 'siteMetadata___menuLinks',
  SiteMetadataMenuLinksLink = 'siteMetadata___menuLinks___link',
  SiteMetadataMenuLinksName = 'siteMetadata___menuLinks___name',
  SiteMetadataPostTitle = 'siteMetadata___postTitle',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataUtterancesRepo = 'siteMetadata___utterances___repo'
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FunctionRoute = 'functionRoute',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginName = 'pluginName',
  RelativeCompiledFilePath = 'relativeCompiledFilePath'
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  PageContext = 'pageContext',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJson = 'pluginCreator___packageJson',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptions = 'pluginCreator___pluginOptions',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version'
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJson = 'packageJson',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptions = 'pluginOptions',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version'
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  menuLinks?: Maybe<Array<Maybe<SiteSiteMetadataMenuLinks>>>;
  postTitle?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  utterances?: Maybe<SiteSiteMetadataUtterances>;
};

export type SiteSiteMetadataFilterInput = {
  author?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  menuLinks?: InputMaybe<SiteSiteMetadataMenuLinksFilterListInput>;
  postTitle?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  utterances?: InputMaybe<SiteSiteMetadataUtterancesFilterInput>;
};

export type SiteSiteMetadataMenuLinks = {
  __typename?: 'SiteSiteMetadataMenuLinks';
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataMenuLinksFilterInput = {
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataMenuLinksFilterListInput = {
  elemMatch?: InputMaybe<SiteSiteMetadataMenuLinksFilterInput>;
};

export type SiteSiteMetadataUtterances = {
  __typename?: 'SiteSiteMetadataUtterances';
  repo?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataUtterancesFilterInput = {
  repo?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type GatsbyImageSharpFixedFragment = { __typename?: 'ImageSharpFixed', base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { __typename?: 'ImageSharpFixed', tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { __typename?: 'ImageSharpFixed', base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFixed', tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_NoBase64Fragment = { __typename?: 'ImageSharpFixed', width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFixed', width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFluidFragment = { __typename?: 'ImageSharpFluid', base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { __typename?: 'ImageSharpFluid', maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { __typename?: 'ImageSharpFluid', tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { __typename?: 'ImageSharpFluid', base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFluid', tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { __typename?: 'ImageSharpFluid', aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFluid', aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQueryQuery = { __typename?: 'Query', allSiteFunction: { __typename?: 'SiteFunctionConnection', nodes: Array<{ __typename?: 'SiteFunction', functionRoute: string }> }, allSitePage: { __typename?: 'SitePageConnection', nodes: Array<{ __typename?: 'SitePage', path: string }> } };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'Query', allImageSharp: { __typename?: 'ImageSharpConnection', edges: Array<{ __typename?: 'ImageSharpEdge', node: { __typename?: 'ImageSharp', id: string, gatsbyImageData: any } }> } };

export type SiteMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteMetadataQuery = { __typename?: 'Query', site?: { __typename?: 'Site', siteMetadata?: { __typename?: 'SiteSiteMetadata', title?: string | null | undefined, description?: string | null | undefined, author?: string | null | undefined, siteUrl?: string | null | undefined, lang?: string | null | undefined, postTitle?: string | null | undefined, utterances?: { __typename?: 'SiteSiteMetadataUtterances', repo?: string | null | undefined } | null | undefined, menuLinks?: Array<{ __typename?: 'SiteSiteMetadataMenuLinks', name?: string | null | undefined, link?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { __typename?: 'Query', allMarkdownRemark: { __typename?: 'MarkdownRemarkConnection', edges: Array<{ __typename?: 'MarkdownRemarkEdge', node: { __typename?: 'MarkdownRemark', html?: string | null | undefined } }> } };

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_3_Query = { __typename?: 'Query', allMarkdownRemark: { __typename?: 'MarkdownRemarkConnection', totalCount: number, group: Array<{ __typename?: 'MarkdownRemarkGroupConnection', fieldValue?: string | null | undefined, totalCount: number }>, edges: Array<{ __typename?: 'MarkdownRemarkEdge', node: { __typename?: 'MarkdownRemark', id: string, frontmatter?: { __typename?: 'MarkdownRemarkFrontmatter', title?: string | null | undefined, category?: string | null | undefined, date?: any | null | undefined, desc?: string | null | undefined, alt?: string | null | undefined, thumbnail?: { __typename?: 'File', base: string, childImageSharp?: { __typename?: 'ImageSharp', id: string } | null | undefined } | null | undefined } | null | undefined, fields?: { __typename?: 'MarkdownRemarkFields', slug?: string | null | undefined } | null | undefined } }> } };

export type Unnamed_4_QueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type Unnamed_4_Query = { __typename?: 'Query', markdownRemark?: { __typename?: 'MarkdownRemark', html?: string | null | undefined, frontmatter?: { __typename?: 'MarkdownRemarkFrontmatter', title?: string | null | undefined, desc?: string | null | undefined, date?: any | null | undefined, category?: string | null | undefined, thumbnail?: { __typename?: 'File', childImageSharp?: { __typename?: 'ImageSharp', gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined } | null | undefined };
