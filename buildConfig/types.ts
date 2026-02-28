export type BuildMode = 'production' | 'development'
export type TargetMode = 'local' | 'github'

export interface BuildEnv {
    mode: BuildMode,
    target: TargetMode
}