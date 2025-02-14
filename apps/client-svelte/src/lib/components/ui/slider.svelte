<script lang="ts">
	import { Slider, type SliderProps } from 'ui-ingredients';

	export type ValueChangeDetails = Parameters<
		Exclude<SliderProps['onValueChange'], undefined>
	>[number];

	let { label, class: className, ...props }: SliderProps & { label: string } = $props();
</script>

<Slider.Root {...props} class="flex items-center gap-2 {className}">
	<Slider.Label>{label}</Slider.Label>
	<Slider.Control class="grow flex items-center">
		<Slider.Track class="h-4 border-2  w-full">
			<Slider.Range class="bg-amber-400 h-full" />
		</Slider.Track>
		<Slider.Thumb class="w-3 h-6 border-2 bg-white" index={0}>
			<Slider.HiddenInput />
		</Slider.Thumb>
	</Slider.Control>
</Slider.Root>
