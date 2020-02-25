import { rephrase } from './shawn'

describe('rephrase', () => {
	it('assassin', function() {
		let result = rephrase('legend says assassins like to play the bass', false)
		expect(result).toMatch(/legend shaysh ashashinsh like to play the bash/)
	})

	it('clowns', function() {
		let result = rephrase('the crazy circus clowns put rice on cymbals', false)
		expect(result).toMatch(/the crazy shircush clownsh put rishe on shymbalsh/)
	})

	it('regular connery', function() {
		let result = rephrase('sean likes swimming near the seashore with o’shea jackson', false)
		expect(result).toMatch(/shawn likesh shwimming near the sheashore with o’shea jackshon/)
	})

	it('annoying connery', function() {
		let result = rephrase('sean likes swimming near the seashore with o’shea jackson', true)
		expect(result).toMatch(/shawn likesh shwimming near the shawshore with o’shaw jackshon/)
	})
})