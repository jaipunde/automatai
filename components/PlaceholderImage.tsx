export default function PlaceholderImage({
    width = "100%",
    height = "400px",
    text = "Image Placeholder",
    color = "#f0f0f0"
}: {
    width?: string;
    height?: string;
    text?: string;
    color?: string;
}) {
    return (
        <div
            style={{
                width,
                height,
                backgroundColor: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '1rem',
                border: '2px dashed #ccc',
                color: '#888',
                fontWeight: 600
            }}
        >
            {text}
        </div>
    );
}
