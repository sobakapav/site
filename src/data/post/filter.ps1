$files = Get-ChildItem -File

# Loop through each file
foreach ($file in $files) {
    # Check if the file contains the specified author line
    if (Select-String -Path $file.FullName -Pattern "author: Ольга Павлова" -Quiet) {
        Get-Content $file.FullName
    }
}
