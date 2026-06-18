public interface IIcon
{
    string Name { get; set; }
    string? Vector { get; set; }
    string? Icon8 { get; set; }
    string? Icon16 { get; set; }
    string? Icon22 { get; set; }
    string? Icon24 { get; set; }
    string? Icon32 { get; set; }
    string? Icon48 { get; set; }
    string? Icon64 { get; set; }
    string? Icon128 { get; set; }
    string? Icon256 { get; set; }
}
 

public class Icon : IIcon
{
    public Icon(string name) { this.Name = name; }
    public string Name { get; set; }
    public string? Vector { get; set; }
    public string? Icon8 { get; set; }
    public string? Icon16 { get; set; }
    public string? Icon22 { get; set; }
    public string? Icon24 { get; set; }
    public string? Icon32 { get; set; }
    public string? Icon48 { get; set; }
    public string? Icon64 { get; set; }
    public string? Icon128 { get; set; }
    public string? Icon256 { get; set; }
}


public interface IIconMetaData
{
    string Name { get; set; }
    string? Comment { get; set; }
    string? Inherits { get; set; }
    bool? FollowsColorScheme { get; set; }
    string? KdeExtensions { get; set; }
    int? DisplayDepth { get; set; }
    int? DesktopDefault { get; set; }
    IEnumerable<int>? DesktopSizes { get; set; }
    int? ToolbarDefault { get; set; }
    IEnumerable<int>? ToolbarSizes { get; set; }
    int? MainToolbarDefault { get; set; }
    IEnumerable<int>? MainToolbarSizes { get; set; }
    int? SmallDefault { get; set; }
    IEnumerable<int>? SmallSizes { get; set; }
    int? PanelDefault { get; set; }
    IEnumerable<int>? PanelSizes { get; set; }
    int? DialogDefault { get; set; }
    IEnumerable<int>? DialogSizes { get; set; }
    IDictionary<string,IEnumerable<IIcon>> Directory { get; set; }
}

public class IconMetaData : IIconMetaData
{

    public string? Name { get; set; }
    public string? Comment { get; set; }
    public string? Inherits { get; set; }
    public bool? FollowsColorScheme { get; set; }
    public string? KdeExtensions { get; set; }
    public int? DisplayDepth { get; set; }
    public int? DesktopDefault { get; set; }
    public IEnumerable<int>? DesktopSizes { get; set; }
    public int? ToolbarDefault { get; set; }
    public IEnumerable<int>? ToolbarSizes { get; set; }
    public int? MainToolbarDefault { get; set; }
    public IEnumerable<int>? MainToolbarSizes { get; set; }
    public int? SmallDefault { get; set; }
    public IEnumerable<int>? SmallSizes { get; set; }
    public int? PanelDefault { get; set; }
    public IEnumerable<int>? PanelSizes { get; set; }
    public int? DialogDefault { get; set; }
    public IEnumerable<int>? DialogSizes { get; set; }
    public IDictionary<string, IEnumerable<IIcon>>? Directory { get; set; }

    public IconMetaData(
    string? Name,
    string? Comment,
    string? Inherits,
    bool? FollowsColorScheme,
    string? KdeExtensions,
    int? DisplayDepth,
    int? DesktopDefault,
    IEnumerable<int>? DesktopSizes,
    int? ToolbarDefault, 
    IEnumerable<int>? ToolbarSizes,
    int? MainToolbarDefault,
    IEnumerable<int>? MainToolbarSizes,
    int? SmallDefault,
    IEnumerable<int>? SmallSizes,
    int? PanelDefault,
    IEnumerable<int>? PanelSizes,
    int? DialogDefault,
    IEnumerable<int>? DialogSizes,
    IDictionary<string,IEnumerable<IIcon>>? Directory
    )
    {
        this.Name = Name;
        this.Comment = Comment;
        this.Inherits = Inherits;
        this.FollowsColorScheme = FollowsColorScheme;
        this.KdeExtensions = KdeExtensions;
        this.DisplayDepth = DisplayDepth;
        this.DesktopDefault = DesktopDefault;
        this.DesktopSizes = DesktopSizes;
        this.ToolbarDefault = ToolbarDefault;
        this.ToolbarSizes = ToolbarSizes;
        this.MainToolbarDefault = MainToolbarDefault;
        this.MainToolbarSizes = MainToolbarSizes;
        this.SmallDefault = SmallDefault;
        this.SmallSizes = SmallSizes;
        this.PanelDefault = PanelDefault;
        this.PanelSizes = PanelSizes;
        this.DialogDefault = DialogDefault;
        this.DialogSizes = DialogSizes;
        this.Directory = Directory;
    }
}