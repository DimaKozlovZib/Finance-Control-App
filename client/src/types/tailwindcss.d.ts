declare module 'tailwindcss' {
	import { Config } from 'tailwindcss/types/config'
	export { Config }
	const tailwindcss: (config: Config) => any
	export default tailwindcss
}
declare module 'tailwindcss/plugin'
declare module 'tailwindcss/colors'
