extension String {
    
    // base64 to string
    func fromBase64() -> String? {
        guard let data = Data(base64Encoded: self) else {
            return nil
        }
        return String(data: data, encoding: .utf8)
    }
    
    // string to base64
    func toBase64() -> String {
        return Data(self.utf8).base64EncodedString()
    }
    
}
