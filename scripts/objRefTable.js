const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.TextBox,
		C3.Plugins.Audio,
		C3.Plugins.video,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.video.Acts.SetVisible,
		C3.Plugins.TextBox.Cnds.OnTextChanged,
		C3.Plugins.TextBox.Cnds.CompareText,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Audio.Acts.Play
	];
};
self.C3_JsPropNameTable = [
	{judul: 0},
	{judul_input: 0},
	{TextInput: 0},
	{fungsi_baris1: 0},
	{judul_fungsi: 0},
	{fungsi_baris2: 0},
	{gambar_hardware: 0},
	{Audio: 0},
	{harddisk: 0},
	{keyboard: 0},
	{mouse: 0},
	{ram: 0}
];

self.InstanceType = {
	judul: class extends self.ISpriteInstance {},
	judul_input: class extends self.ITextInstance {},
	TextInput: class extends self.ITextInputInstance {},
	fungsi_baris1: class extends self.ITextInstance {},
	judul_fungsi: class extends self.ITextInstance {},
	fungsi_baris2: class extends self.ITextInstance {},
	gambar_hardware: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	harddisk: class extends self.IWorldInstance {},
	keyboard: class extends self.IWorldInstance {},
	mouse: class extends self.IWorldInstance {},
	ram: class extends self.IWorldInstance {}
}