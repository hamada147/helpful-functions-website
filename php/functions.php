<?php
	function main() {
		// because main is the new world
	}

	/**
	 * check emails and data sent through mail function as it can be hacked
	 * @var str: all data recieved to be sent through the php email service
	 * @return true if injected and not safe to use mail function
	 * @return false if not injected and safe to use mail function
	 */
	function IsEmailInjected($str) {
		$injections = array(
			'(\n+)',
			'(\r+)',
			'(\t+)',
			'(%0A+)',
			'(%0D+)',
			'(%08+)',
			'(%09+)'
		);

		$inject = join('|', $injections);
		$inject = "/$inject/i";

		if(preg_match($inject,$str))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	/**
	 * Universal function for checking session status
	 * @return true if session already started
	 * @return false if session didn't start yet
	 */
	function is_session_started() {
		if ( php_sapi_name() !== 'cli' ) {
			if ( version_compare(phpversion(), '5.4.0', '>=') ) {
				return session_status() === PHP_SESSION_ACTIVE ? true : false;
			} else {
				return session_id() === '' ? false : true;
			}
		}
		return false;
	}

	/**
	 * destories all the session data as well as the cookies used in that session
	 * @return true on finishing the clearning
	 * @return false on failling to destory the session or session didn't even
	 */
	function logout() {
		$_SESSION = array();
		if (ini_get("session.use_cookies")) {
			$params = session_get_cookie_params();
			setcookie(session_name(), '', time() - 42000,
				$params["path"], $params["domain"],
				$params["secure"], $params["httponly"]
			);
		}
		if ( session_destroy() ) {
			return true;
		} else {
			return false;
		}
	}
?>
