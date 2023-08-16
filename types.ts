export interface ProjectImage {
  id: string
  title: string
  img: string
}

export interface CompanyInfo {
  id: string
  title: string
  details: string
}

export interface ProjectDetail {
  id: string
  details: string
}

export interface SocialSharing {
  id: string
  name: string
  icon: string
  url: string
}

export interface Project {
  id: string
  title: string
  category: string
  img: string
  publishDate: string
  tag: string
  clientTitle: string
  objectivesTitle: string
  objectivesDetails: string
  techTitle: string
  detailsTitle: string
  socialTitle: string
  projectImages: ProjectImage[]
  companyInfos: CompanyInfo[]
  technologies: string[]
  projectDetails: ProjectDetail[]
  socialSharings: SocialSharing[]
}
