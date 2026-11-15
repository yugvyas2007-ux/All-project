export default function Footer() {
    return (
        <footer className="px-4 py-3 text-center text-sm text-gray-500 border-t mt-8">
            &copy; {new Date().getFullYear()} My React App. All rights reserved.
        </footer>
    );
}