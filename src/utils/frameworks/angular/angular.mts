const framework = "angular";

export default function (componentName: string, folder: string, anotherComponent: boolean, testFile: boolean): Answers {
	return {
		componentName,
		framework: framework.toLowerCase(),
		template: "component.component.ts",
		testFile: testFile,
		folder: folder,
	};
}
